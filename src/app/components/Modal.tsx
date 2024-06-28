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
    const rankRef = useRef<HTMLInputElement>(null);
    const percentileRef = useRef<HTMLInputElement>(null);
    const scoreRef = useRef<HTMLInputElement>(null);

    const rankError = useRef<HTMLParagraphElement>(null);
    const percentileError = useRef<HTMLParagraphElement>(null);
    const scoreError = useRef<HTMLParagraphElement>(null);

    const modalCloseHandler = () => {
        if (rankRef.current) {
            rankRef.current.value = "";
        }
        if (percentileRef.current) {
            percentileRef.current.value = "";
        }
        if (scoreRef.current) {
            scoreRef.current.value = "";
        }
        closeModal();
    };

    const saveHandle = () => {
        const rank = rankRef.current?.value || "";
        const percentile = percentileRef.current?.value || "";
        const score = scoreRef.current?.value || "";
        if (
            rank.length > 0 &&
            percentile.length > 0 &&
            score.length > 0 &&
            parseFloat(rank) >= 0 &&
            parseFloat(percentile) >= 0 &&
            parseFloat(percentile) <= 100 &&
            parseFloat(score) >= 0 &&
            parseFloat(score) <= 15
        ) {
            setUserData({
                rank,
                percentile,
                score,
            });
            modalCloseHandler();
        }
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
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
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
                        <div className="flex flex-col items-end">
                            <input
                                type="number"
                                id="rank"
                                ref={rankRef}
                                onChange={(event) => {
                                    const number = parseFloat(
                                        event.target.value
                                    );
                                    let opacity = "";
                                    if (
                                        typeof number === "number" &&
                                        number >= 0
                                    ) {
                                        opacity = "0";
                                    } else {
                                        opacity = "1";
                                    }
                                    if (rankError.current) {
                                        rankError.current.style.opacity =
                                            opacity;
                                    }
                                }}
                                className="w-full border border-blue-900 rounded focus:outline-none px-2 py-0.5"
                            />
                            <p
                                ref={rankError}
                                className="text-red-500 text-xs transition-opacity duration-300"
                            >
                                Must be a number ({">"}=0)
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
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
                        <div className="flex flex-col items-end">
                            <input
                                type="number"
                                id="percentile"
                                ref={percentileRef}
                                onChange={(event) => {
                                    const number = parseFloat(
                                        event.target.value
                                    );
                                    let opacity = "";
                                    if (number >= 0 && number <= 100) {
                                        opacity = "0";
                                    } else {
                                        opacity = "1";
                                    }
                                    if (percentileError.current) {
                                        percentileError.current.style.opacity =
                                            opacity;
                                    }
                                }}
                                className="w-full border border-blue-900 rounded focus:outline-none px-2 py-0.5"
                            />
                            <p
                                ref={percentileError}
                                className="text-red-500 text-xs transition-opacity duration-300"
                            >
                                Must be between 0 and 100
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
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
                        <div className="flex flex-col items-end">
                            <input
                                type="number"
                                id="score"
                                ref={scoreRef}
                                onChange={(event) => {
                                    const number = parseFloat(
                                        event.target.value
                                    );
                                    let opacity = "";
                                    if (number >= 0 && number <= 15) {
                                        opacity = "0";
                                    } else {
                                        opacity = "1";
                                    }
                                    if (scoreError.current) {
                                        scoreError.current.style.opacity =
                                            opacity;
                                    }
                                }}
                                className="w-full border border-blue-900 rounded focus:outline-none px-2 py-0.5"
                            />
                            <p
                                ref={scoreError}
                                className="text-red-500 text-xs transition-opacity duration-300"
                            >
                                Must be between 0 and 15
                            </p>
                        </div>
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
