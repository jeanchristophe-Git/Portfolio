import NavSection from "@/components/nav";

export default function BlogPage() {
    return (
        <div>
            <NavSection />
            <div className="flex flex-col items-center mt-32">
                <h1 className="text-center">Blog page</h1>
                <div className="mt-8">
                    <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono dark:bg-slate-100 ">
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2 text-red-500">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 "></div>
                            </div>
                            <p className="text-sm dark:text-slate-800 ">bash</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-green-400 dark:text-green-600 ">$ npm install BlogPage </p>
                            <p className="text-red-500  dark:text-red-600 ">× ./app/blog/page.js Error: </p>
                            <p className="text-white dark:text-slate-800 ">Bahh j'ai la flemme mais t'inquiete le blog arrive tres vite 🤣 </p>
                            <p className="text-green-400 dark:text-green-600 ">$</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
