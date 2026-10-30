/**
 * CENTRAL COMPONENT HUB
 * Mengekspor seluruh komponen aplikasi agar dapat diimpor dengan bersih dan rapi:
 * Contoh: import { Navbar, Footer, PageHeader, CourseCard } from "../components";
 */

// Layout
export { default as Navbar } from "./layout/Navbar";
export { default as Footer } from "./layout/Footer";

// Common
export { default as PageHeader } from "./common/PageHeader";
export { default as ScrollToTop } from "./common/ScrollToTop";
export { default as ErrorBoundary } from "./common/ErrorBoundary";

// Cards
export { default as CourseCard } from "./cards/CourseCard";
export { default as InnovationCard } from "./cards/InnovationCard";
export { default as RtlCard } from "./cards/RtlCard";

