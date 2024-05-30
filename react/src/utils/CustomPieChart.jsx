import React from "react";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import chroma from "chroma-js";

const numberToAlphabet = (num) => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabets[num - 1] || num;
};

const convertToPercentages = (data) => {
    const total = data.reduce((sum, entry) => sum + entry.count, 0);
    return data.map((entry) => ({
        ...entry,
        percentage: ((entry.count / total) * 100).toFixed(2),
    }));
};

function CustomPieChart({ dataCount, isPercentage = false }) {
    const generateColors = (numColors) => {
        return chroma
            .scale(["#fafa6e", "#096979"])
            .mode("lch")
            .colors(numColors);
    };

    let formattedDate = dataCount;
    const mappedData = dataCount.map((entry) => ({
        ...entry,
        name: numberToAlphabet(entry.name),
    }));

    const sortedData = mappedData.sort((a, b) => a.name.localeCompare(b.name));
    const percentageData = convertToPercentages(sortedData);

    if (isPercentage) {
        formattedDate = percentageData;
    }

    const colors = generateColors(dataCount.length);

    console.log(percentageData);
    return (
        <ResponsiveContainer width="100%" height="90%">
            <PieChart>
                <Pie
                    dataKey="count"
                    data={formattedDate}
                    label={
                        isPercentage
                            ? ({ name, percentage }) =>
                                  `${name}: ${percentage}%`
                            : true
                    }
                    startAngle={90}
                    endAngle={-270}
                >
                    {formattedDate.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                </Pie>
                <Tooltip />

                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default CustomPieChart;
