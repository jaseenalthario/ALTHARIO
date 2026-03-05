import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import DemoContactPopup from '../components/DemoContactPopup';
import AIAssistantMascot from '../components/AIAssistantMascot';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-zinc-300 bg-[#060b1a]">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <WhatsAppWidget />
            <AIAssistantMascot />
            <DemoContactPopup />
        </div>
    );
};

export default MainLayout;
