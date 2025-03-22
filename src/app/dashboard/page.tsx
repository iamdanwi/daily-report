"use client"
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FolderGit2, Mail, Settings, Users, Clock, Save, Plus, Trash2, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Dashboard = () => {
    const [repositories, setRepositories] = useState([
        { id: 1, name: 'frontend-app', provider: 'github', connected: true, branch: 'main' },
        { id: 2, name: 'backend-api', provider: 'github', connected: true, branch: 'develop' },
        { id: 3, name: 'mobile-app', provider: 'gitlab', connected: false, branch: 'main' }
    ]);

    const [reportSettings, setReportSettings] = useState({
        frequency: 'daily',
        time: '09:00',
        includeBranchInfo: true,
        includeCommits: true,
        includePullRequests: true,
        includeIssues: true,
        maxCommitsPerRepo: 5
    });

    const [recipients, setRecipients] = useState([
        { email: 'team@example.com', name: 'Development Team' },
        { email: 'manager@example.com', name: 'Project Manager' }
    ]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const addRepository = () => {
        setRepositories([...repositories, {
            id: repositories.length + 1,
            name: '',
            provider: 'github',
            connected: false,
            branch: 'main'
        }]);
    };

    const removeRepository = (id) => {
        setRepositories(repositories.filter(repo => repo.id !== id));
    };

    const addRecipient = () => {
        setRecipients([...recipients, { email: '', name: '' }]);
    };

    const removeRecipient = (index) => {
        const newRecipients = [...recipients];
        newRecipients.splice(index, 1);
        setRecipients(newRecipients);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header - Styled to match landing page */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <Image src="/logo.svg" height={200} width={200} alt="repo reporter" />
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link href="/dashboard" className="inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium text-gray-900">
                                Dashboard
                            </Link>
                            <Link href="/reports" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300">
                                Reports
                            </Link>
                            <Link href="/team" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300">
                                Team
                            </Link>
                        </nav>

                        <div className="hidden md:ml-6 md:flex md:items-center">
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900">
                                <Settings className="h-4 w-4 mr-2" />
                                Settings
                            </Button>
                            <Link href="/signout" className="ml-3 inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-blue-500 hover:text-blue-600">
                                Sign out
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <Link href="/dashboard" className="block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium text-blue-700 bg-blue-50">
                                Dashboard
                            </Link>
                            <Link href="/reports" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">
                                Reports
                            </Link>
                            <Link href="/team" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">
                                Team
                            </Link>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-4">
                                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900">
                                    <Settings className="h-4 w-4 mr-2" />
                                    Settings
                                </Button>
                                <Link href="/signout" className="ml-auto block px-4 py-2 text-base font-medium text-blue-500 hover:text-blue-600">
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="mt-2 text-lg text-gray-600">Configure your repository reporting system.</p>

                    <div className="mt-8">
                        <Tabs defaultValue="repositories" className="w-full">
                            <TabsList className="mb-8 bg-white p-1 border border-gray-200 rounded-lg">
                                <TabsTrigger value="repositories" className="flex items-center data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                                    <FolderGit2 className="h-4 w-4 mr-2" />
                                    Repositories
                                </TabsTrigger>
                                <TabsTrigger value="reports" className="flex items-center data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                                    <Mail className="h-4 w-4 mr-2" />
                                    Reports
                                </TabsTrigger>
                                <TabsTrigger value="recipients" className="flex items-center data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                                    <Users className="h-4 w-4 mr-2" />
                                    Recipients
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="repositories">
                                <Card className="border-none shadow-sm">
                                    <CardHeader className="bg-blue-50 rounded-t-lg pb-4">
                                        <CardTitle className="text-2xl font-bold text-gray-900">Connected Repositories</CardTitle>
                                        <CardDescription className="text-gray-600 text-base">
                                            Connect the repositories you want to include in your reports.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="space-y-6">
                                            {repositories.map((repo) => (
                                                <div key={repo.id} className="flex items-center space-x-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
                                                    <div className="flex-1 space-y-4">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                            <div>
                                                                <Label htmlFor={`repo-name-${repo.id}`} className="text-gray-700 font-medium mb-2 block">Repository Name</Label>
                                                                <Input
                                                                    id={`repo-name-${repo.id}`}
                                                                    value={repo.name}
                                                                    onChange={(e) => {
                                                                        const newRepos = [...repositories];
                                                                        const index = newRepos.findIndex(r => r.id === repo.id);
                                                                        newRepos[index].name = e.target.value;
                                                                        setRepositories(newRepos);
                                                                    }}
                                                                    placeholder="e.g., my-project"
                                                                    className="border-gray-200 focus:border-blue-300 focus:ring-blue-500"
                                                                />
                                                            </div>
                                                            <div>
                                                                <Label htmlFor={`repo-provider-${repo.id}`} className="text-gray-700 font-medium mb-2 block">Git Provider</Label>
                                                                <Select
                                                                    value={repo.provider}
                                                                    onValueChange={(value) => {
                                                                        const newRepos = [...repositories];
                                                                        const index = newRepos.findIndex(r => r.id === repo.id);
                                                                        newRepos[index].provider = value;
                                                                        setRepositories(newRepos);
                                                                    }}
                                                                >
                                                                    <SelectTrigger id={`repo-provider-${repo.id}`} className="border-gray-200">
                                                                        <SelectValue />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectItem value="github">GitHub</SelectItem>
                                                                        <SelectItem value="gitlab">GitLab</SelectItem>
                                                                        <SelectItem value="bitbucket">Bitbucket</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                            </div>
                                                            <div>
                                                                <Label htmlFor={`repo-branch-${repo.id}`} className="text-gray-700 font-medium mb-2 block">Branch</Label>
                                                                <Input
                                                                    id={`repo-branch-${repo.id}`}
                                                                    value={repo.branch}
                                                                    onChange={(e) => {
                                                                        const newRepos = [...repositories];
                                                                        const index = newRepos.findIndex(r => r.id === repo.id);
                                                                        newRepos[index].branch = e.target.value;
                                                                        setRepositories(newRepos);
                                                                    }}
                                                                    placeholder="e.g., main"
                                                                    className="border-gray-200 focus:border-blue-300 focus:ring-blue-500"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex items-center space-x-2">
                                                            <Switch
                                                                checked={repo.connected}
                                                                onCheckedChange={(checked) => {
                                                                    const newRepos = [...repositories];
                                                                    const index = newRepos.findIndex(r => r.id === repo.id);
                                                                    newRepos[index].connected = checked;
                                                                    setRepositories(newRepos);
                                                                }}
                                                                className="data-[state=checked]:bg-blue-500"
                                                            />
                                                            <Label className={repo.connected ? "text-blue-500 font-medium" : "text-gray-500"}>
                                                                {repo.connected ? "Connected" : "Disconnected"}
                                                            </Label>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => removeRepository(repo.id)}
                                                            className="hover:bg-red-50 hover:text-red-500"
                                                        >
                                                            <Trash2 className="h-4 w-4 text-red-500" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                            <Button
                                                variant="outline"
                                                className="mt-6 border-dashed border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50 text-gray-600 hover:text-blue-500 w-full py-6 rounded-lg transition-colors"
                                                onClick={addRepository}
                                            >
                                                <Plus className="h-5 w-5 mr-2" />
                                                Add Repository
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="reports">
                                <Card className="border-none shadow-sm">
                                    <CardHeader className="bg-blue-50 rounded-t-lg pb-4">
                                        <CardTitle className="text-2xl font-bold text-gray-900">Report Settings</CardTitle>
                                        <CardDescription className="text-gray-600 text-base">
                                            Configure how and when your repository reports are delivered.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <Label htmlFor="report-frequency" className="text-gray-700 font-medium mb-2 block">Report Frequency</Label>
                                                    <Select
                                                        value={reportSettings.frequency}
                                                        onValueChange={(value) => setReportSettings({ ...reportSettings, frequency: value })}
                                                    >
                                                        <SelectTrigger id="report-frequency" className="border-gray-200">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="daily">Daily</SelectItem>
                                                            <SelectItem value="weekly">Weekly</SelectItem>
                                                            <SelectItem value="biweekly">Bi-weekly</SelectItem>
                                                            <SelectItem value="monthly">Monthly</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div>
                                                    <Label htmlFor="report-time" className="text-gray-700 font-medium mb-2 block">Delivery Time</Label>
                                                    <div className="flex items-center space-x-2">
                                                        <Clock className="h-5 w-5 text-blue-500" />
                                                        <Input
                                                            id="report-time"
                                                            type="time"
                                                            value={reportSettings.time}
                                                            onChange={(e) => setReportSettings({ ...reportSettings, time: e.target.value })}
                                                            className="border-gray-200 focus:border-blue-300 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6">Report Content</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                                                        <div>
                                                            <Label htmlFor="include-branch-info" className="text-gray-900 font-medium">Branch Information</Label>
                                                            <p className="text-sm text-gray-600 mt-1">Include branch status and recent changes</p>
                                                        </div>
                                                        <Switch
                                                            id="include-branch-info"
                                                            checked={reportSettings.includeBranchInfo}
                                                            onCheckedChange={(checked) => setReportSettings({ ...reportSettings, includeBranchInfo: checked })}
                                                            className="data-[state=checked]:bg-blue-500"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                                                        <div>
                                                            <Label htmlFor="include-commits" className="text-gray-900 font-medium">Commit History</Label>
                                                            <p className="text-sm text-gray-600 mt-1">Include recent commits in the report</p>
                                                        </div>
                                                        <Switch
                                                            id="include-commits"
                                                            checked={reportSettings.includeCommits}
                                                            onCheckedChange={(checked) => setReportSettings({ ...reportSettings, includeCommits: checked })}
                                                            className="data-[state=checked]:bg-blue-500"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                                                        <div>
                                                            <Label htmlFor="include-pull-requests" className="text-gray-900 font-medium">Pull Requests</Label>
                                                            <p className="text-sm text-gray-600 mt-1">Include open and recently merged PRs</p>
                                                        </div>
                                                        <Switch
                                                            id="include-pull-requests"
                                                            checked={reportSettings.includePullRequests}
                                                            onCheckedChange={(checked) => setReportSettings({ ...reportSettings, includePullRequests: checked })}
                                                            className="data-[state=checked]:bg-blue-500"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                                                        <div>
                                                            <Label htmlFor="include-issues" className="text-gray-900 font-medium">Issues</Label>
                                                            <p className="text-sm text-gray-600 mt-1">Include open and recently closed issues</p>
                                                        </div>
                                                        <Switch
                                                            id="include-issues"
                                                            checked={reportSettings.includeIssues}
                                                            onCheckedChange={(checked) => setReportSettings({ ...reportSettings, includeIssues: checked })}
                                                            className="data-[state=checked]:bg-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                                <Label htmlFor="max-commits" className="text-gray-900 font-medium mb-2 block">Maximum Commits Per Repository</Label>
                                                <Input
                                                    id="max-commits"
                                                    type="number"
                                                    value={reportSettings.maxCommitsPerRepo}
                                                    onChange={(e) => setReportSettings({ ...reportSettings, maxCommitsPerRepo: parseInt(e.target.value) })}
                                                    min="1"
                                                    max="20"
                                                    className="max-w-xs border-gray-200 focus:border-blue-300 focus:ring-blue-500"
                                                />
                                                <p className="text-sm text-gray-600 mt-2">
                                                    Limit the number of commits shown for each repository
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="recipients">
                                <Card className="border-none shadow-sm">
                                    <CardHeader className="bg-blue-50 rounded-t-lg pb-4">
                                        <CardTitle className="text-2xl font-bold text-gray-900">Report Recipients</CardTitle>
                                        <CardDescription className="text-gray-600 text-base">
                                            Manage who receives your repository reports.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="space-y-6">
                                            {recipients.map((recipient, index) => (
                                                <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
                                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div>
                                                            <Label htmlFor={`recipient-name-${index}`} className="text-gray-700 font-medium mb-2 block">Name</Label>
                                                            <Input
                                                                id={`recipient-name-${index}`}
                                                                value={recipient.name}
                                                                onChange={(e) => {
                                                                    const newRecipients = [...recipients];
                                                                    newRecipients[index].name = e.target.value;
                                                                    setRecipients(newRecipients);
                                                                }}
                                                                placeholder="e.g., Development Team"
                                                                className="border-gray-200 focus:border-blue-300 focus:ring-blue-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor={`recipient-email-${index}`} className="text-gray-700 font-medium mb-2 block">Email</Label>
                                                            <Input
                                                                id={`recipient-email-${index}`}
                                                                type="email"
                                                                value={recipient.email}
                                                                onChange={(e) => {
                                                                    const newRecipients = [...recipients];
                                                                    newRecipients[index].email = e.target.value;
                                                                    setRecipients(newRecipients);
                                                                }}
                                                                placeholder="e.g., team@example.com"
                                                                className="border-gray-200 focus:border-blue-300 focus:ring-blue-500"
                                                            />
                                                        </div>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => removeRecipient(index)}
                                                        className="hover:bg-red-50 hover:text-red-500"
                                                    >
                                                        <Trash2 className="h-4 w-4 text-red-500" />
                                                    </Button>
                                                </div>
                                            ))}
                                            <Button
                                                variant="outline"
                                                className="mt-6 border-dashed border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50 text-gray-600 hover:text-blue-500 w-full py-6 rounded-lg transition-colors"
                                                onClick={addRecipient}
                                            >
                                                <Plus className="h-5 w-5 mr-2" />
                                                Add Recipient
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 h-auto rounded-lg text-base font-medium transition duration-200 flex items-center">
                            <Save className="h-5 w-5 mr-2" />
                            Save Configuration
                        </Button>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Dashboard;