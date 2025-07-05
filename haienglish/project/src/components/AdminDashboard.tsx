import React, { useState } from 'react';
import { 
  Users, Plus, Search, Filter, Download, Mail, Facebook, CheckCircle, Clock, X, 
  Eye, FileText, CreditCard, Calendar, Phone, MapPin, Award, TrendingUp,
  DollarSign, Package, Star, AlertCircle, Edit, Trash2, Send
} from 'lucide-react';

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  nationality: string;
  courses: string[];
  package: string;
  paymentMethod: string;
  paymentAmount: number;
  paymentDate: string;
  enrollmentDate?: string;
  completionDate?: string;
  status: 'pending' | 'enrolled' | 'completed';
  paymentScreenshot?: string;
  notes?: string;
  certificatesSent?: boolean;
}

const AdminDashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+63 917 123 4567',
      address: 'Manila, Philippines',
      nationality: 'American',
      courses: ['TEFL', 'TESOL', 'Business English'],
      package: 'WHOLE PACKAGE A',
      paymentMethod: 'GCash',
      paymentAmount: 5299,
      paymentDate: '2025-01-15',
      status: 'pending',
      paymentScreenshot: 'gcash_payment_001.jpg',
      notes: 'Interested in teaching in Asia'
    },
    {
      id: '2',
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+63 918 234 5678',
      address: 'Cebu City, Philippines',
      nationality: 'Filipino',
      courses: ['TEFL', 'TEYL', 'English for Kids', 'Cultural Studies'],
      package: 'WHOLE PACKAGE B',
      paymentMethod: 'BDO Bank Transfer',
      paymentAmount: 8999,
      paymentDate: '2025-01-14',
      enrollmentDate: '2025-01-15',
      status: 'enrolled',
      paymentScreenshot: 'bank_transfer_002.jpg',
      certificatesSent: false
    },
    {
      id: '3',
      name: 'Ahmed Hassan',
      email: 'ahmed.hassan@email.com',
      phone: '+63 919 345 6789',
      address: 'Davao City, Philippines',
      nationality: 'Egyptian',
      courses: ['Advanced English', 'Business English'],
      package: 'Individual Courses',
      paymentMethod: 'PayPal',
      paymentAmount: 3500,
      paymentDate: '2025-01-13',
      enrollmentDate: '2025-01-14',
      completionDate: '2025-01-16',
      status: 'completed',
      paymentScreenshot: 'paypal_payment_003.jpg',
      certificatesSent: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'enrolled' | 'completed'>('all');
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'payments' | 'reports'>('overview');

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.nationality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEnrollStudent = (studentId: string) => {
    setStudents(prev => prev.map(student => 
      student.id === studentId 
        ? { ...student, status: 'enrolled' as const, enrollmentDate: new Date().toISOString().split('T')[0] }
        : student
    ));
    setShowEnrollModal(false);
    setSelectedStudent(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'enrolled': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'enrolled': return <Users className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const totalRevenue = students.reduce((sum, student) => sum + student.paymentAmount, 0);
  const pendingStudents = students.filter(s => s.status === 'pending').length;
  const enrolledStudents = students.filter(s => s.status === 'enrolled').length;
  const completedStudents = students.filter(s => s.status === 'completed').length;

  const StatCard = ({ title, value, icon, color, subtitle }: any) => (
    <div className={`bg-gradient-to-br ${color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-200`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {subtitle && <p className="text-white/70 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: <TrendingUp className="h-5 w-5" /> },
              { id: 'students', label: 'Students', icon: <Users className="h-5 w-5" /> },
              { id: 'payments', label: 'Payments', icon: <CreditCard className="h-5 w-5" /> },
              { id: 'reports', label: 'Reports', icon: <FileText className="h-5 w-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                  <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your students today.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Add Student</span>
                  </button>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Export Data</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Revenue"
                value={`₱${totalRevenue.toLocaleString()}`}
                subtitle="This month"
                icon={<DollarSign className="h-6 w-6" />}
                color="from-emerald-500 to-emerald-600"
              />
              <StatCard
                title="Pending Students"
                value={pendingStudents}
                subtitle="Awaiting enrollment"
                icon={<Clock className="h-6 w-6" />}
                color="from-amber-500 to-amber-600"
              />
              <StatCard
                title="Active Students"
                value={enrolledStudents}
                subtitle="Currently enrolled"
                icon={<Users className="h-6 w-6" />}
                color="from-blue-500 to-blue-600"
              />
              <StatCard
                title="Completed"
                value={completedStudents}
                subtitle="Certificates issued"
                icon={<Award className="h-6 w-6" />}
                color="from-purple-500 to-purple-600"
              />
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Enrollments</h3>
                <div className="space-y-4">
                  {students.slice(0, 3).map((student) => (
                    <div key={student.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 rounded-full p-2">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{student.name}</p>
                        <p className="text-sm text-gray-500">{student.package} • ₱{student.paymentAmount.toLocaleString()}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 rounded-lg p-2">
                        <CreditCard className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="font-medium">GCash</span>
                    </div>
                    <span className="text-gray-600">
                      ₱{students.filter(s => s.paymentMethod === 'GCash').reduce((sum, s) => sum + s.paymentAmount, 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 rounded-lg p-2">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="font-medium">BDO Bank Transfer</span>
                    </div>
                    <span className="text-gray-600">
                      ₱{students.filter(s => s.paymentMethod === 'BDO Bank Transfer').reduce((sum, s) => sum + s.paymentAmount, 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 rounded-lg p-2">
                        <CreditCard className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="font-medium">PayPal</span>
                    </div>
                    <span className="text-gray-600">
                      ₱{students.filter(s => s.paymentMethod === 'PayPal').reduce((sum, s) => sum + s.paymentAmount, 0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <div className="space-y-6">
            {/* Filters and Search */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search students by name, email, or nationality..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Filter className="h-5 w-5 text-gray-400" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="enrolled">Enrolled</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Add Student</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Students Grid */}
            <div className="grid gap-6">
              {filteredStudents.map((student) => (
                <div key={student.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      {/* Student Info */}
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-3 text-white font-bold text-lg">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                          <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Mail className="h-4 w-4" />
                              <span>{student.email}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Phone className="h-4 w-4" />
                              <span>{student.phone}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{student.nationality}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Package & Status */}
                      <div className="flex flex-col lg:items-end space-y-2">
                        <div className="flex items-center space-x-2">
                          <Package className="h-4 w-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{student.package}</span>
                          <span className="text-emerald-600 font-bold">₱{student.paymentAmount.toLocaleString()}</span>
                        </div>
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(student.status)}`}>
                          {getStatusIcon(student.status)}
                          <span className="capitalize">{student.status}</span>
                        </span>
                      </div>
                    </div>

                    {/* Courses */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {student.courses.map((course, index) => (
                          <span
                            key={index}
                            className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {student.status === 'pending' && (
                        <button
                          onClick={() => {
                            setSelectedStudent(student);
                            setShowEnrollModal(true);
                          }}
                          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4" />
                          <span>Enroll Student</span>
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setShowDetailsModal(true);
                        }}
                        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors flex items-center space-x-2"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View Details</span>
                      </button>
                      <a
                        href={`mailto:${student.email}`}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                      </a>
                      {student.paymentScreenshot && (
                        <button className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors flex items-center space-x-2">
                          <FileText className="h-4 w-4" />
                          <span>View Payment</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Management</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-2 text-white font-bold text-sm mr-3">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{student.name}</div>
                              <div className="text-sm text-gray-500">{student.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-bold text-emerald-600">₱{student.paymentAmount.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">{student.package}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <CreditCard className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-900">{student.paymentMethod}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.paymentDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(student.status)}`}>
                            {getStatusIcon(student.status)}
                            <span className="capitalize">{student.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            {student.paymentScreenshot && (
                              <button className="text-blue-600 hover:text-blue-900">View Receipt</button>
                            )}
                            <button className="text-emerald-600 hover:text-emerald-900">Verify</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reports & Analytics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Revenue:</span>
                      <span className="font-bold text-emerald-600">₱{totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average per Student:</span>
                      <span className="font-bold">₱{Math.round(totalRevenue / students.length).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Progress</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completion Rate:</span>
                      <span className="font-bold text-emerald-600">{Math.round((completedStudents / students.length) * 100)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Students:</span>
                      <span className="font-bold">{enrolledStudents}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enrollment Confirmation Modal */}
      {showEnrollModal && selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Confirm Student Enrollment</h3>
              <button
                onClick={() => setShowEnrollModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-blue-600 rounded-full p-2 text-white font-bold">
                    {selectedStudent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{selectedStudent.name}</h4>
                    <p className="text-sm text-gray-600">{selectedStudent.email}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p><strong>Payment:</strong> ₱{selectedStudent.paymentAmount.toLocaleString()} via {selectedStudent.paymentMethod}</p>
                  <p><strong>Package:</strong> {selectedStudent.package}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Courses to Enroll:</h5>
                <div className="space-y-1">
                  {selectedStudent.courses.map((course, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowEnrollModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => handleEnrollStudent(selectedStudent.id)}
                className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Confirm Enrollment</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student Details Modal */}
      {showDetailsModal && selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Student Details</h3>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Personal Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Name:</span>
                    <p className="font-medium">{selectedStudent.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Email:</span>
                    <p className="font-medium">{selectedStudent.email}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Phone:</span>
                    <p className="font-medium">{selectedStudent.phone}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Nationality:</span>
                    <p className="font-medium">{selectedStudent.nationality}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-gray-600">Address:</span>
                    <p className="font-medium">{selectedStudent.address}</p>
                  </div>
                </div>
              </div>

              {/* Course Info */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Course Information</h4>
                <div className="space-y-2">
                  <p><span className="text-gray-600">Package:</span> <span className="font-medium">{selectedStudent.package}</span></p>
                  <div>
                    <span className="text-gray-600">Courses:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedStudent.courses.map((course, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-emerald-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Payment Information</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Amount:</span>
                    <p className="font-bold text-emerald-600">₱{selectedStudent.paymentAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Method:</span>
                    <p className="font-medium">{selectedStudent.paymentMethod}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Payment Date:</span>
                    <p className="font-medium">{selectedStudent.paymentDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Status:</span>
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedStudent.status)}`}>
                      {getStatusIcon(selectedStudent.status)}
                      <span className="capitalize">{selectedStudent.status}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedStudent.notes && (
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Notes</h4>
                  <p className="text-sm text-gray-700">{selectedStudent.notes}</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <a
                href={`mailto:${selectedStudent.email}`}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;