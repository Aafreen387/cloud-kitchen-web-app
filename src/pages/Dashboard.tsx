import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ChefHat,
  LogOut,
  ShoppingBag,
  Clock,
  CheckCircle,
  Plus,
  Trash2,
  Loader2,
  Utensils,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';

interface Order {
  id: string;
  item_name: string;
  quantity: number;
  total_price: number;
  status: string;
  created_at: string;
}

interface Profile {
  full_name: string;
  phone: string;
}

const quickOrderItems = [
  { name: 'Signature Burger', price: 12.99 },
  { name: 'Wood-Fired Pizza', price: 15.99 },
  { name: 'Asian Noodle Bowl', price: 10.99 },
  { name: 'Garden Fresh Salad', price: 8.99 },
];

export default function Dashboard() {
  const { user, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [ordering, setOrdering] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [authLoading, user, navigate]);

  useEffect(() => {
    if (!user) return;

    (async () => {
      const { data: profileData } = await supabase
        .from('profiles')
        .select('full_name, phone')
        .eq('id', user.id)
        .maybeSingle();
      setProfile(profileData);

      const { data: ordersData } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      setOrders(ordersData ?? []);

      setLoading(false);
    })();
  }, [user]);

  const placeOrder = async (itemName: string, price: number) => {
    if (!user) return;
    setOrdering(itemName);
    const { data, error } = await supabase
      .from('orders')
      .insert({
        item_name: itemName,
        quantity: 1,
        total_price: price,
      })
      .select()
      .single();

    if (!error && data) {
      setOrders((prev) => [data as Order, ...prev]);
    }
    setOrdering(null);
  };

  const deleteOrder = async (id: string) => {
    const { error } = await supabase.from('orders').delete().eq('id', id);
    if (!error) {
      setOrders((prev) => prev.filter((o) => o.id !== id));
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const activeOrders = orders.filter((o) => o.status === 'pending' || o.status === 'preparing');
  const completedOrders = orders.filter((o) => o.status === 'delivered' || o.status === 'completed');
  const totalSpent = orders.reduce((sum, o) => sum + Number(o.total_price), 0);

  return (
    <div className="min-h-screen bg-stone-950">
      {/* Header */}
      <header className="bg-stone-900 border-b border-stone-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-stone-900" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">
                Cloud<span className="text-amber-400">Kitchen</span>
              </span>
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Welcome back, {profile?.full_name?.split(' ')[0] || 'Chef'}!
          </h1>
          <p className="text-stone-400 mt-1">Manage your orders and explore our menu.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-stone-400 text-sm">Total Orders</span>
            </div>
            <div className="text-3xl font-bold text-white">{orders.length}</div>
          </div>
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-400/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-stone-400 text-sm">Active Orders</span>
            </div>
            <div className="text-3xl font-bold text-white">{activeOrders.length}</div>
          </div>
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-400/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-stone-400 text-sm">Total Spent</span>
            </div>
            <div className="text-3xl font-bold text-white">${totalSpent.toFixed(2)}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Order */}
          <div className="lg:col-span-1">
            <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6">
              <div className="flex items-center gap-2 mb-5">
                <Utensils className="w-5 h-5 text-amber-400" />
                <h2 className="text-white font-semibold text-lg">Quick Order</h2>
              </div>
              <div className="space-y-3">
                {quickOrderItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => placeOrder(item.name, item.price)}
                    disabled={ordering === item.name}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-stone-800 border border-stone-700 hover:border-amber-400/50 transition-colors group disabled:opacity-50"
                  >
                    <div className="text-left">
                      <div className="text-white font-medium text-sm">{item.name}</div>
                      <div className="text-amber-400 font-bold">${item.price}</div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-stone-700 group-hover:bg-amber-400 flex items-center justify-center transition-colors">
                      {ordering === item.name ? (
                        <Loader2 className="w-4 h-4 text-white animate-spin" />
                      ) : (
                        <Plus className="w-4 h-4 text-stone-300 group-hover:text-stone-900 transition-colors" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Profile info */}
            <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6 mt-6">
              <h2 className="text-white font-semibold text-lg mb-4">Your Profile</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-stone-500">Name</span>
                  <p className="text-white font-medium">{profile?.full_name || 'N/A'}</p>
                </div>
                <div>
                  <span className="text-stone-500">Email</span>
                  <p className="text-white font-medium break-all">{user.email}</p>
                </div>
                <div>
                  <span className="text-stone-500">Phone</span>
                  <p className="text-white font-medium">{profile?.phone || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6">
              <h2 className="text-white font-semibold text-lg mb-5">Order History</h2>

              {orders.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-2xl bg-stone-800 flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-8 h-8 text-stone-600" />
                  </div>
                  <p className="text-stone-400">No orders yet. Place a quick order to get started!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-stone-800/50 border border-stone-700/50 hover:border-stone-600 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0">
                          <Utensils className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{order.item_name}</div>
                          <div className="text-stone-500 text-sm">
                            Qty: {order.quantity} · {new Date(order.created_at).toLocaleDateString()} at{' '}
                            {new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-amber-400 font-bold">${Number(order.total_price).toFixed(2)}</div>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              order.status === 'pending'
                                ? 'bg-amber-400/10 text-amber-400'
                                : order.status === 'preparing'
                                ? 'bg-blue-400/10 text-blue-400'
                                : 'bg-green-400/10 text-green-400'
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="w-8 h-8 rounded-lg bg-stone-700/50 hover:bg-red-500/20 hover:text-red-400 text-stone-400 flex items-center justify-center transition-colors"
                          aria-label="Delete order"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
