import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


createRoot(document.getElementById("root")!).render(<App />);
// paste this in src/lib/trackVisitor.ts
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function trackVisitor() {
  try {
    const ipRes  = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();
    const geoRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
    const geo    = await geoRes.json();

    await addDoc(collection(db, "visitors"), {
      ip:        ipData.ip,
      city:      geo.city      || "—",
      country:   geo.country_name || "—",
      page:      window.location.pathname,
      userAgent: navigator.userAgent,
      visitedAt: serverTimestamp(),
    });
  } catch(e) { /* silent fail */ }
}
