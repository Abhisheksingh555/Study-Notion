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
    path: "/dashboard/student",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 4,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 5,
    name: "Quizess",
    path: "/dashboard/Quiz",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscChecklist",
  },
  {
    id: 6,
    name: "Assignments",
    path: "/dashboard/assignment",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscNotebook",
  },
  {
    id: 7,
    name: "Live Class",
    path: "/dashboard/liveclass",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscBroadcast",
  },
  {
    id: 8,
    name: "Courses Suggestion",
    path: "/dashboard/suggestion-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 9,
    name: "AI-Powered",
    path: "/dashboard/aipowered",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscSymbolMethod",
  },
  {
    id: 10,
    name: "Certificate",
    path: "/dashboard/certificate",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscVerified",
  },
  {
    id: 11,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 12,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 13,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 14,
    name: "Live Class",
    path: "/dashboard/liveclass",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscBroadcast",
  },
  {
    id: 15,
    name: "Add Assignments",
    path: "/dashboard/assignment",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscNotebook",
  },
  {
    id: 16,
    name: "Quiz",
    path: "/dashboard/Quiz",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscStarFull",
  },
  {
    id: 18,
    name: "Dashboard",
    path: "/dashboard",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscDashboard",
  },
  {
    id: 19,
    name: "Add Category",
    path: "/dashboard/catalog",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  {
    id: 20,
    name: "Manage Users",
    path: "/dashboard/manage-users",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAccount",
  },
  {
    id: 21,
    name: "Assign Student",
    path: "/dashboard/assign-student",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscBook",
  },
  {
    id: 22,
    name: "Reports & Analytics",
    path: "/dashboard/reports",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscGraphLine",
  },
  {
    id: 23,
    name: "Feedback & Complaints",
    path: "/dashboard/feedback",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscCommentDiscussion",
  }
];
