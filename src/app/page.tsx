"use client";

import { useState } from "react";
import { MdBarChart } from "react-icons/md";
import { CiMedal } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { SkillTest } from "./components/SkillTest";
import { Dashboard } from "./components/Dashboard";
import { Internship } from "./components/Internship";
import { Modal } from "./components/Modal";

export default function Home() {
    const [optionSelected, setOptionSelected] = useState(0);

    const [userData, setUserData] = useState({
        rank: "1",
        percentile: "80",
        score: "10",
    });

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const menu = [
        { icon: <MdBarChart />, text: "Dashboard", component: <Dashboard /> },
        {
            icon: <CiMedal />,
            text: "Skill Test",
            component: <SkillTest openModal={openModal} userData={userData} />,
        },
        { icon: <CiFileOn />, text: "Internship", component: <Internship /> },
    ];

    return (
        <>
            <div className="w-11/12 max-w-7xl mx-auto flex">
                <div className="hidden min-w-36 sm:flex flex-col gap-y-3 py-3">
                    {menu.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setOptionSelected(index)}
                            className={`w-full flex justify-center items-center gap-x-2 ${
                                optionSelected == index
                                    ? "text-indigo-500 bg-gray-100"
                                    : "text-gray-700"
                            } border-2 border-gray-100 rounded-full transition-all duration-300 py-3`}
                        >
                            <p className="text-xl">{option.icon}</p>
                            <p>{option.text}</p>
                        </button>
                    ))}
                </div>
                <div
                    className={`w-full py-3 pr-0 pl-0 sm:pl-3 md:pl-5 mb-8 ${
                        modal
                            ? "max-h-screen overflow-y-hidden"
                            : "overflow-y-auto"
                    }`}
                >
                    {menu[optionSelected].component}
                </div>
            </div>
            <div className="sm:hidden w-full fixed left-0 right-0 bottom-0 bg-gray-100 border-t-2 border-gray-200 flex justify-around items-center">
                {menu.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => setOptionSelected(index)}
                        className={`text-2xl py-2.5 ${
                            optionSelected == index
                                ? "text-indigo-500"
                                : "text-gray-700"
                        } transition-colors duration-300`}
                    >
                        {option.icon}
                    </button>
                ))}
            </div>
            <Modal
                show={modal}
                closeModal={closeModal}
                setUserData={setUserData}
            />
        </>
    );
}
