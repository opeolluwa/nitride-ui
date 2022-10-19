import { createRouter, createWebHistory } from "vue-router";
import AuthenticationView from "@/views/auth/AuthIndexView.vue";
import BaseLayout from "@/views/IndexView.vue";
import HomeView from "@/views/HomeView.vue";
import OnboardingView from "@/views/onboarding/OnboardingIndexView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "onboarding",
      component: OnboardingView,
      children: [
        {
          path: "",
          name: "onboarding-screen-one",
          component: import("@/views/onboarding/OnboardingViewOne.vue"),
        },
        {
          path: "get-started",
          name: "onboarding-screen-two",
          component: import("@/views/onboarding/OnboardingViewTwo.vue"),
        },
        {
          path: "crete-account",
          name: "onboarding-screen-three",
          component: import("@/views/onboarding/OnboardingViewThree.vue"),
        },
      ]
    },
    {
      name: "auth",
      path: "/auth",
      component: AuthenticationView,
      children: [
        {
          path: "",
          name: "sign-up",
          component: import("@/views/auth/SignupView.vue"),
        },
        {
          path: "login",
          name: "login",
          component: import("@/views/auth/LoginView.vue"),
        },
        {
          path: "reset-password",
          name: "reset-password",
          component: import("@/views/auth/PasswordResetView.vue"),
        },
      ]
    },
    {
      path: "/u",
      component: BaseLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "emails",
          component: () => import("@/views/email/EmailIndexView.vue"),
          children: [
            {
              // get all emails
              path: "",
              name: "emails",
              component: () => import("@/views/email/EmailView.vue"),
            },
            {
              // create new email
              path: "new-email",
              name: "new-email",
              component: () => import("@/views/email/CreateEmailView.vue"),
            },
          ],
        },
        {
          path: "projects",
          name: "projects",
          component: () => import("@/views/ProjectsView.vue"),
        },
        {
          path: "notes",
          name: "notes",
          component: () => import("@/views/NotesView.vue"),
        },
        {
          path: "settings",
          name: "settings",
          component: () => import("@/views/SettingsView.vue"),
        },
        {
          path: "notification",
          name: "notification",
          component: () => import("@/views/NotificationView.vue"),
        },
        {
          path: "todo",
          name: "todo",
          component: () => import("@/views/todo/TodoIndexView.vue"),
        },
      ],
      //add navigation guards here
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
