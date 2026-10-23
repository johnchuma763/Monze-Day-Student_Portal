// Monze Day Student Portal

const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";

let supabaseClient = null;

function initializeSupabase() {
    if (!window.supabase) {
        console.warn("Supabase library has not loaded yet.");
        return;
    }

    if (
        SUPABASE_URL === "YOUR_SUPABASE_PROJECT_URL" ||
        SUPABASE_PUBLISHABLE_KEY === "YOUR_SUPABASE_PUBLISHABLE_KEY"
    ) {
        console.warn("Please configure your Supabase project details.");
        return;
    }

    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

    console.log("Supabase connected successfully.");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSupabase);
} else {
    initializeSupabase();
}
