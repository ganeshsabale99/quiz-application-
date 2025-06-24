import React from 'react';
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ExpertDashboard: React.FC = () => {
  const stats = [
    { name: 'Questions Created', value: '45', icon: FileText, color: 'bg-blue-500' },
    { name: 'Pending Review', value: '8', icon: Clock, color: 'bg-yellow-500' },
    { name: 'Approved', value: '37', icon: CheckCircle, color: 'bg-green-500' },
    { name: 'Needs Revision', value: '3', icon: AlertCircle, color: 'bg-red-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Expert Dashboard</h1>
        <p className="text-gray-600">Create and manage quiz questions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Questions</h3>
          <div className="space-y-4">
            {[
              { title: 'What is React?', category: 'JavaScript', status: 'Approved', complexity: 'Normal' },
              { title: 'Explain closures in JavaScript', category: 'JavaScript', status: 'Pending', complexity: 'Intermediate' },
              { title: 'Database normalization', category: 'Database', status: 'Revision', complexity: 'High' },
              { title: 'HTTP vs HTTPS', category: 'Networking', status: 'Approved', complexity: 'Normal' },
            ].map((question, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{question.title}</p>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    question.status === 'Approved' 
                      ? 'bg-green-100 text-green-800'
                      : question.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {question.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{question.category}</span>
                  <span>•</span>
                  <span>{question.complexity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Categories</h3>
          <div className="space-y-3">
            {[
              { name: 'JavaScript', count: 15, color: 'bg-blue-500' },
              { name: 'React', count: 12, color: 'bg-green-500' },
              { name: 'Node.js', count: 8, color: 'bg-purple-500' },
              { name: 'Database', count: 10, color: 'bg-orange-500' },
            ].map((category) => (
              <div key={category.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span className="font-medium text-gray-900">{category.name}</span>
                </div>
                <span className="text-sm text-gray-600">{category.count} questions</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDashboard;