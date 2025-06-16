import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { CustomerDetails } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bitcoin, Calendar, CreditCard, MapPin, Package, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOutAction } from "@/app/actions";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Fetch customer details and associated payments
  const { data: customerDetails } = await supabase
    .from('customer_details')
    .select(`
      *,
      payments (
        id,
        amount,
        sats_amount,
        invoice,
        payment_type,
        status,
        created_at
      )
    `)
    .eq('email', user.email) as { data: CustomerDetails[] | null };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'failed':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const totalOrders = customerDetails?.reduce((sum, customer) => sum + (customer.payments?.length || 0), 0) || 0;
  const totalSpent = customerDetails?.reduce((sum, customer) => 
    sum + (customer.payments?.reduce((paymentSum, payment) => paymentSum + payment.amount, 0) || 0), 0) || 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Account</h1>
            <p className="text-muted-foreground mt-1">Welcome back, {user.email}</p>
          </div>
          <form action={signOutAction}>
            <Button type="submit" variant="outline" size="sm">
              Sign Out
            </Button>
          </form>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <Package className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{totalOrders}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-full">
                  <CreditCard className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                  <p className="text-2xl font-bold">${totalSpent.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-full">
                  <Bitcoin className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Payment Method</p>
                  <p className="text-lg font-semibold">Bitcoin</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {customerDetails && customerDetails.length > 0 ? (
          <div className="space-y-8">
            {customerDetails.map((customer) => (
              <div key={customer.id} className="space-y-6">
                {/* Customer Information Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Customer Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                          <p className="text-lg">{customer.first_name} {customer.last_name}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Email</p>
                          <p className="text-lg">{customer.email}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Shipping Address
                          </p>
                          <div className="text-lg space-y-1">
                            <p>{customer.address}</p>
                            <p>{customer.city}, {customer.postal_code}</p>
                            <p>{customer.country}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Order History */}
                {customer.payments && customer.payments.length > 0 ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        Order History
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {customer.payments.map((payment, index) => (
                          <div key={payment.id}>
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-lg border bg-card/50">
                              <div className="flex-1 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-4">
                                {/* Order ID & Date */}
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Order ID</p>
                                  <p className="font-mono text-sm">{payment.id.slice(0, 8)}...</p>
                                  <div className="flex items-center gap-1 mt-1">
                                    <Calendar className="w-3 h-3 text-muted-foreground" />
                                    <p className="text-xs text-muted-foreground">
                                      {formatDate(payment.created_at)}
                                    </p>
                                  </div>
                                </div>

                                {/* Amount */}
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Amount</p>
                                  <p className="text-lg font-semibold">${payment.amount}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {payment.sats_amount.toLocaleString()} sats
                                  </p>
                                </div>

                                {/* Payment Method */}
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Payment Method</p>
                                  <div className="flex items-center gap-2">
                                    {payment.payment_type === 'lightning' ? (
                                      <Zap className="w-4 h-4 text-yellow-400" />
                                    ) : (
                                      <Bitcoin className="w-4 h-4 text-yellow-400" />
                                    )}
                                    <span className="capitalize text-sm">
                                      {payment.payment_type === 'lightning' ? 'Lightning' : 'Bitcoin'}
                                    </span>
                                  </div>
                                </div>

                                {/* Status */}
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                                  <Badge 
                                    variant="outline" 
                                    className={`capitalize ${getStatusColor(payment.status)}`}
                                  >
                                    {payment.status}
                                  </Badge>
                                </div>
                              </div>

                              {/* Invoice (Mobile: Full width, Desktop: Right side) */}
                              <div className="lg:w-64">
                                <p className="text-sm font-medium text-muted-foreground mb-2">Invoice</p>
                                <div className="bg-muted rounded p-2">
                                  <p className="font-mono text-xs break-all">
                                    {payment.invoice.slice(0, 40)}...
                                  </p>
                                </div>
                              </div>
                            </div>
                            {index < customer.payments.length - 1 && <Separator className="my-4" />}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">No orders yet</p>
                      <p className="text-muted-foreground mb-4">
                        Start shopping to see your order history here.
                      </p>
                      <Button asChild>
                        <a href="/products">Browse Products</a>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <User className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Welcome to ClassicBuy!</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                You haven't made any purchases yet. Start exploring our amazing deals on the latest tech products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/products">Start Shopping</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/about">Learn More</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}