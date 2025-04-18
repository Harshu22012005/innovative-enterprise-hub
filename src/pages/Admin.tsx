
import React, { useState, useEffect } from 'react';
import { 
  Table, TableHeader, TableRow, TableHead, 
  TableBody, TableCell 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  Card, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  BarChart, Calendar, RefreshCcw, Download, 
  Users, Image, Award, Eye 
} from 'lucide-react';
import { getActivityLogs, getFilteredActivityLogs, clearActivityLogs } from '@/utils/adminUtils';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activityLogs, setActivityLogs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  
  // Handle authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin_ecell' && password === 'InnovateXpo@2024') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };
  
  // Load activity logs
  const loadActivityLogs = () => {
    if (activeTab === 'all') {
      setActivityLogs(getActivityLogs());
    } else {
      setActivityLogs(getFilteredActivityLogs(activeTab as any));
    }
  };
  
  // Listen for activity log updates
  useEffect(() => {
    const handleActivityUpdate = () => {
      loadActivityLogs();
    };
    
    window.addEventListener('activity-log-updated', handleActivityUpdate);
    
    // Initial load
    loadActivityLogs();
    
    return () => {
      window.removeEventListener('activity-log-updated', handleActivityUpdate);
    };
  }, [activeTab]);
  
  // Calculate statistics
  const stats = {
    totalVisits: activityLogs.filter(log => log.type === 'page_visit').length,
    certificates: activityLogs.filter(log => log.type === 'certificate_generation').length,
    photoUploads: activityLogs.filter(log => log.type === 'photo_upload').length,
    downloads: activityLogs.filter(log => log.type === 'certificate_download').length,
  };
  
  // Export data as CSV
  const exportData = () => {
    const headers = ['Type', 'User', 'Time', 'Details'];
    const csvRows = [
      headers.join(','),
      ...activityLogs.map(log => {
        const details = JSON.stringify(log.details).replace(/"/g, '""');
        return [
          log.type,
          log.user,
          new Date(log.timestamp).toLocaleString(),
          `"${details}"`
        ].join(',');
      })
    ];
    
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `ecell-activity-logs-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">E-Cell Admin</CardTitle>
            <CardDescription className="text-center">
              Login to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              {loginError && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                  {loginError}
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-1">
                    Username
                  </label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-6">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-ecell-blue">E-Cell Admin Dashboard</h1>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            Return to Website
          </Button>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Visits</p>
                  <h3 className="text-3xl font-bold mt-1">{stats.totalVisits}</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="text-blue-700" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Certificates Generated</p>
                  <h3 className="text-3xl font-bold mt-1">{stats.certificates}</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="text-green-700" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Photos Uploaded</p>
                  <h3 className="text-3xl font-bold mt-1">{stats.photoUploads}</h3>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Image className="text-purple-700" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Downloads</p>
                  <h3 className="text-3xl font-bold mt-1">{stats.downloads}</h3>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <Download className="text-orange-700" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Activity Logs */}
        <Card className="mb-8">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Activity Logs</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={loadActivityLogs}>
                  <RefreshCcw className="mr-1" size={16} />
                  Refresh
                </Button>
                <Button variant="outline" size="sm" onClick={exportData}>
                  <Download className="mr-1" size={16} />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Activities</TabsTrigger>
                <TabsTrigger value="page_visit">Page Visits</TabsTrigger>
                <TabsTrigger value="certificate_generation">Certificates</TabsTrigger>
                <TabsTrigger value="photo_upload">Photo Uploads</TabsTrigger>
                <TabsTrigger value="certificate_download">Downloads</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activityLogs.length > 0 ? (
                        activityLogs.map((log) => (
                          <TableRow key={log.id}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                {log.type === 'page_visit' && <Eye size={16} className="mr-2 text-gray-500" />}
                                {log.type === 'certificate_generation' && <Award size={16} className="mr-2 text-green-500" />}
                                {log.type === 'photo_upload' && <Image size={16} className="mr-2 text-purple-500" />}
                                {log.type === 'certificate_download' && <Download size={16} className="mr-2 text-orange-500" />}
                                {log.type}
                              </div>
                            </TableCell>
                            <TableCell>{log.user}</TableCell>
                            <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {JSON.stringify(log.details)}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                            No activity logs found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-gray-500">
              Showing {activityLogs.length} {activityLogs.length === 1 ? 'entry' : 'entries'}
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
