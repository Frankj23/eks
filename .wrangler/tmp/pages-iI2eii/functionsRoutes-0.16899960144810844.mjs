import { onRequestDelete as __api_admin_engineering_projects__id__js_onRequestDelete } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\admin\\engineering-projects\\[id].js"
import { onRequestPatch as __api_admin_engineering_projects__id__js_onRequestPatch } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\admin\\engineering-projects\\[id].js"
import { onRequestDelete as __api_admin_properties__id__js_onRequestDelete } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\admin\\properties\\[id].js"
import { onRequestPatch as __api_admin_properties__id__js_onRequestPatch } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\admin\\properties\\[id].js"
import { onRequestGet as __api_admin_engineering_projects_index_js_onRequestGet } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\admin\\engineering-projects\\index.js"
import { onRequestPost as __api_admin_engineering_projects_index_js_onRequestPost } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\admin\\engineering-projects\\index.js"
import { onRequestGet as __api_admin_properties_index_js_onRequestGet } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\admin\\properties\\index.js"
import { onRequestPost as __api_admin_properties_index_js_onRequestPost } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\admin\\properties\\index.js"
import { onRequestPost as __api_admin_upload_js_onRequestPost } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\admin\\upload.js"
import { onRequestGet as __api_engineering_projects__slug__js_onRequestGet } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\engineering-projects\\[slug].js"
import { onRequestGet as __api_properties__slug__js_onRequestGet } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\properties\\[slug].js"
import { onRequestGet as __api_engineering_projects_index_js_onRequestGet } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\engineering-projects\\index.js"
import { onRequestGet as __api_properties_index_js_onRequestGet } from "C:\\Users\\FJ\\Documents\\EK'S TECH\\eks\\functions\\api\\properties\\index.js"

export const routes = [
    {
      routePath: "/api/admin/engineering-projects/:id",
      mountPath: "/api/admin/engineering-projects",
      method: "DELETE",
      middlewares: [],
      modules: [__api_admin_engineering_projects__id__js_onRequestDelete],
    },
  {
      routePath: "/api/admin/engineering-projects/:id",
      mountPath: "/api/admin/engineering-projects",
      method: "PATCH",
      middlewares: [],
      modules: [__api_admin_engineering_projects__id__js_onRequestPatch],
    },
  {
      routePath: "/api/admin/properties/:id",
      mountPath: "/api/admin/properties",
      method: "DELETE",
      middlewares: [],
      modules: [__api_admin_properties__id__js_onRequestDelete],
    },
  {
      routePath: "/api/admin/properties/:id",
      mountPath: "/api/admin/properties",
      method: "PATCH",
      middlewares: [],
      modules: [__api_admin_properties__id__js_onRequestPatch],
    },
  {
      routePath: "/api/admin/engineering-projects",
      mountPath: "/api/admin/engineering-projects",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_engineering_projects_index_js_onRequestGet],
    },
  {
      routePath: "/api/admin/engineering-projects",
      mountPath: "/api/admin/engineering-projects",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_engineering_projects_index_js_onRequestPost],
    },
  {
      routePath: "/api/admin/properties",
      mountPath: "/api/admin/properties",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_properties_index_js_onRequestGet],
    },
  {
      routePath: "/api/admin/properties",
      mountPath: "/api/admin/properties",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_properties_index_js_onRequestPost],
    },
  {
      routePath: "/api/admin/upload",
      mountPath: "/api/admin",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_upload_js_onRequestPost],
    },
  {
      routePath: "/api/engineering-projects/:slug",
      mountPath: "/api/engineering-projects",
      method: "GET",
      middlewares: [],
      modules: [__api_engineering_projects__slug__js_onRequestGet],
    },
  {
      routePath: "/api/properties/:slug",
      mountPath: "/api/properties",
      method: "GET",
      middlewares: [],
      modules: [__api_properties__slug__js_onRequestGet],
    },
  {
      routePath: "/api/engineering-projects",
      mountPath: "/api/engineering-projects",
      method: "GET",
      middlewares: [],
      modules: [__api_engineering_projects_index_js_onRequestGet],
    },
  {
      routePath: "/api/properties",
      mountPath: "/api/properties",
      method: "GET",
      middlewares: [],
      modules: [__api_properties_index_js_onRequestGet],
    },
  ]