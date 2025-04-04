import { ACCOUNT_TYPE } from './../src/utils/constants';

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 7,
    name: "Quizess",
    path: "/dashboard/Quiz",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscChecklist",
  },
  {
    id: 8,
    name: "Assignments",
    path: "/dashboard/assignment",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscFile",
  },
  {
    id: 9,
    name: "Live Class",
    path: "/dashboard/live",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscBroadcast",
  },
  {
    id: 10,
    name: "Courses Suggestion",
    path: "/dashboard/suggestion-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 11,
    name: "AI-Powered",
    path: "/dashboard/aipowered",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscSymbolMethod",
  },
  {
    id: 22,
    name: "Feedback & Complaints",
    path: "/dashboard/feedback",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscCommentDiscussion", 
  },
  {
    id: 12,
    name: "Certificate",
    path: "/dashboard/certificate",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscVerified",
  },
  {
    id: 13,
    name: "Live Class",
    path: "/dashboard/live",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscBroadcast",
  },
  {
    id: 14,
    name: "Add Assignments",
    path: "/dashboard/addassignment",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscNotebook",
  },
  {
    id: 15,
    name: "Gamification",
    path: "/dashboard/gamification",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscStarFull",
  },
  {
    id: 16,
    name: "Course Analytics",
    path: "/dashboard/courseAnalytics",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscGraphLine",
  },
  {
    id: 17,
    name: "Dashboard",
    path: "/dashboard",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscDashboard",
  },
  {
    id: 18,
    name: "Add Category",
    path: "/dashboard/catalog",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  {
    id: 19,
    name: "Manage Users",
    path: "/dashboard/manage-users",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAccount",  
},
{
    id: 20,
    name: "Assign Student",
    path: "/dashboard/assign-student",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscBook",
},
{
    id: 21,
    name: "Reports & Analytics",
    path: "/dashboard/reports",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscGraphLine", 
},
{
  id: 22,
  name: "Feedback & Complaints",
  path: "/dashboard/feedback",
  type: ACCOUNT_TYPE.ADMIN,
  icon: "VscCommentDiscussion", 
}

];
