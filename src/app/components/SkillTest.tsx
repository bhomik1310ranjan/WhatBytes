"use client";

import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { percentileData } from "../percentile-data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        color += letters[randomIndex];
    }
    return color;
}

function ProgressBar({ percent }: { percent: number }) {
    const color = randomColor();
    return (
        <div
            className={`w-full h-2.5 rounded-full relative`}
            style={{
                backgroundColor: `${color}66`,
                border: `1px solid ${color}`,
            }}
        >
            <div
                className={`h-full absolute left-0 top-0 bg-blue-400 rounded-full`}
                style={{ width: `${percent}%`, backgroundColor: color }}
            ></div>
        </div>
    );
}

function PercentileLineChart() {
    return (
        <ResponsiveContainer width="100%" aspect={1.4}>
            <LineChart data={percentileData}>
                <CartesianGrid />
                <XAxis dataKey="percentile" />
                <YAxis />
                <Tooltip />
                <Line dataKey="engineers" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export function SkillTest({
    openModal,
    userData,
}: {
    openModal: () => void;
    userData: {
        rank: string;
        percentile: string;
        score: string;
    };
}) {
    return (
        <div>
            <p className="text-xl pb-2">Skill Test</p>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full md:w-3/5 flex flex-col gap-3">
                    <div className="flex justify-between items-center gap-x-2.5 border-2 border-gray-100 rounded-xl p-4">
                        <img src="/html.png" className="w-8" />
                        <p>
                            <p className="font-bold">
                                HyperText Markup Language
                            </p>
                            <p className="opacity-80 text-sm">
                                Questions: 08 | Duration: 15mins | Submitted on
                                5 June 2021
                            </p>
                        </p>
                        <button
                            type="button"
                            onClick={openModal}
                            className="font-medium text-sm text-white bg-blue-900 rounded-md px-4 py-2"
                        >
                            Update
                        </button>
                    </div>
                    <div className="border-2 border-gray-100 rounded-xl p-4">
                        <p className="font-bold mb-2">Quick Statistics</p>
                        <div className="flex items-center justify-between flex-wrap gap-3.5">
                            <div className="mx-auto flex flex-col sm:flex-row items-center gap-2">
                                <div className="w-14 aspect-square bg-gray-100 rounded-full flex justify-center items-center text-2xl">
                                    🏆
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-bold text-lg">
                                        {userData.rank}
                                    </p>
                                    <p className="opacity-80 text-sm uppercase text-center">
                                        Your Rank
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto flex flex-col sm:flex-row items-center gap-2">
                                <div className="w-14 aspect-square bg-gray-100 rounded-full flex justify-center items-center text-2xl">
                                    🗒️
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-bold text-lg">
                                        {userData.percentile}%
                                    </p>
                                    <p className="opacity-80 text-sm uppercase text-center">
                                        Percentile
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto flex flex-col sm:flex-row items-center gap-2">
                                <div className="w-14 aspect-square bg-gray-100 rounded-full flex justify-center items-center text-2xl">
                                    ✅
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-bold text-lg">
                                        {userData.score} / 15
                                    </p>
                                    <p className="opacity-80 text-sm uppercase text-center">
                                        Correct Answers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 border-2 border-gray-100 rounded-xl p-4">
                        <p className="font-bold mb-2">Comparison Graph</p>
                        <p className="mb-3">
                            <span className="font-semibold">
                                You scored {userData.percentile}% percentile
                            </span>{" "}
                            which is lower than the average percentile 72% of
                            all the engineers who took this assessment.
                        </p>
                        <PercentileLineChart />
                    </div>
                </div>
                <div className="w-full md:w-2/5 flex flex-col gap-3">
                    <div className="border-2 border-gray-100 rounded-xl p-4">
                        <p className="font-bold mb-3.5">
                            Syllabus Wise Analysis
                        </p>
                        <div className="flex flex-col gap-y-2.5">
                            <div className="flex flex-col">
                                <p className="opacity-90">
                                    HTML Tools, Forms, History
                                </p>
                                <div className="flex items-baseline gap-x-2">
                                    <ProgressBar percent={80} />
                                    <p>80%</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="opacity-90">
                                    Tags and References in HTML
                                </p>
                                <div className="flex items-baseline gap-x-2">
                                    <ProgressBar percent={60} />
                                    <p>60%</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="opacity-90">
                                    Tables and References in HTML
                                </p>
                                <div className="flex items-baseline gap-x-2">
                                    <ProgressBar percent={24} />
                                    <p>24%</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="opacity-90">Tables and CSS Bas</p>
                                <div className="flex items-baseline gap-x-2">
                                    <ProgressBar percent={96} />
                                    <p>96%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 border-2 border-gray-100 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Question Analysis</p>
                            <p className="font-bold text-indigo-900">
                                {userData.score} / 15
                            </p>
                        </div>
                        <p>
                            <span className="font-semibold">
                                You scored {userData.score} question correct out
                                of 15.
                            </span>{" "}
                            However it still needs more improvement.
                        </p>
                        <div className="w-full sm:w-1/2 mx-auto">
                            <CircularProgressbar
                                value={(parseInt(userData.score) * 100) / 15}
                                text="🎯"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
