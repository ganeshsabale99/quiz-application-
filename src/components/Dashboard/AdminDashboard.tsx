import React from 'react';
import { Users, BookOpen, Clock, Award, TrendingUp, AlertCircle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    { name: 'Total Students', value: '1,234', icon: Users, color: 'bg-blue-500', change: '+12%' },
    { name: 'Active Quizzes', value: '45', icon: BookOpen, color: 'bg-green-500', change: '+8%' },
    { name: 'Scheduled Exams', value: '12', icon: Clock, color: 'bg-purple-500', change: '+3%' },
    { name: 'Avg. Score', value: '78%', icon: Award, color: 'bg-orange-500', change: '+5%' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Manage quizzes, students, and exam schedules</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Quiz Activity</h3>
          <div className="space-y-4">
            {[
              { name: 'JavaScript Fundamentals', participants: 45, avgScore: 82, status: 'Active' },
              { name: 'React Advanced Concepts', participants: 32, avgScore: 76, status: 'Completed' },
              { name: 'Node.js Backend', participants: 28, avgScore: 84, status: 'Active' },
              { name: 'Database Design', participants: 67, avgScore: 79, status: 'Scheduled' },
            ].map((quiz) => (
              <div key={quiz.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{quiz.name}</p>
                  <p className="text-sm text-gray-500">{quiz.participants} participants • Avg: {quiz.avgScore}%</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  quiz.status === 'Active' 
                    ? 'bg-green-100 text-green-800'
                    : quiz.status === 'Completed'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {quiz.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Exams</h3>
            <div className="space-y-3">
              {[
                { name: 'Final Assessment', date: 'Dec 15, 2024', time: '10:00 AM' },
                { name: 'Mid-term Exam', date: 'Dec 18, 2024', time: '2:00 PM' },
                { name: 'Skills Test', date: 'Dec 20, 2024', time: '9:00 AM' },
              ].map((exam) => (
                <div key={exam.name} className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-gray-900">{exam.name}</p>
                  <p className="text-sm text-gray-600">{exam.date} at {exam.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Payment Failed</p>
                  <p className="text-xs text-yellow-700">3 students need payment review</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-800">New Registrations</p>
                  <p className="text-xs text-blue-700">12 new students awaiting approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;