"use client";

import { Dispatch, SetStateAction, useRef } from "react";

export function Modal({
    show,
    closeModal,
    setUserData,
}: {
    show: boolean;
    closeModal: () => void;
    setUserData: Dispatch<
        SetStateAction<{
            rank: string;
            percentile: string;
            score: string;
        }>
    >;
}) {
    const rankRef = useRef(null);
    const percentileRef = useRef(null);
    const scoreRef = useRef(null);

    const modalCloseHandler = () => {
        rankRef.current.value = "";
        percentileRef.current.value = "";
        scoreRef.current.value = "";
        closeModal();
    };

    const saveHandle = () => {
        setUserData({
            rank: rankRef.current.value,
            percentile: percentileRef.current.value,
            score: scoreRef.current.value,
        });
        modalCloseHandler();
    };

    return (
        <>
            <div
                className={`w-full h-full absolute inset-0 z-10 bg-[#00000018] backdrop-blur-sm ${
                    show
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                } transition-opacity duration-200`}
                onClick={modalCloseHandler}
            ></div>
            <div
                className={`w-11/12 md:w-2/3 max-w-lg mx-auto absolute left-1/2 top-1/2 z-20 -translate-x-1/2 bg-white rounded-md ${
                    show
                        ? "opacity-100 pointer-events-auto -translate-y-1/2"
                        : "opacity-0 pointer-events-none -translate-y-1/4"
                } transition-all duration-200 px-3 sm:px-5 py-2 sm:py-4`}
            >
                <div className="flex justify-between items-center gap-x-2 mb-3">
                    <p className="font-bold text-lg">Update Scores</p>
                    <img src="/html.png" className="w-8" />
                </div>
                <form className="flex flex-col gap-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                        <label
                            htmlFor="rank"
                            className="flex items-center gap-x-4"
                        >
                            <div className="w-6 aspect-square text-white bg-indigo-900 flex justify-center items-center rounded-full">
                                1
                            </div>
                            <p>
                                Update your{" "}
                                <span className="font-bold">Rank</span>
                            </p>
                        </label>
                        <input
                            type="text"
                            id="rank"
                            ref={rankRef}
                            className="border border-blue-900 rounded focus:outline-none px-2 py-0.5"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                        <label
                            htmlFor="percentile"
                            className="flex items-center gap-x-4"
                        >
                            <div className="w-6 aspect-square text-white bg-indigo-900 flex justify-center items-center rounded-full">
                                2
                            </div>
                            <p>
                                Update your{" "}
                                <span className="font-bold">Percentile</span>
                            </p>
                        </label>
                        <input
                            type="text"
                            id="percentile"
                            ref={percentileRef}
                            className="border border-blue-900 rounded focus:outline-none px-2 py-0.5"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                        <label
                            htmlFor="score"
                            className="flex items-center gap-x-4"
                        >
                            <div className="w-6 aspect-square text-white bg-indigo-900 flex justify-center items-center rounded-full">
                                3
                            </div>
                            <p>
                                Update your{" "}
                                <span className="font-bold">Current Score</span>
                            </p>
                        </label>
                        <input
                            type="text"
                            id="score"
                            ref={scoreRef}
                            className="border border-blue-900 rounded focus:outline-none px-2 py-0.5"
                        />
                    </div>

                    <div className="flex items-center justify-end gap-x-2">
                        <button
                            type="button"
                            onClick={modalCloseHandler}
                            className="px-3 py-1 border border-blue-950 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={saveHandle}
                            className="text-white px-3 py-1 border border-blue-950 bg-blue-950 rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
