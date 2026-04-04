import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function trackVisitor() {
  try {
    const ipRes  = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();
    const geoRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
    const geo    = await geoRes.json();

    await addDoc(collection(db, "visitors"), {
      ip:        ipData.ip,
      city:      geo.city         || "—",
      country:   geo.country_name || "—",
      region:    geo.region       || "—",
      page:      window.location.pathname,
      userAgent: navigator.userAgent,
      visitedAt: serverTimestamp(),
    });
  } catch (e) { /* silent fail */ }
}