import React from 'react';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: DataPoint[];
  height?: number;
  width?: number;
  title?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 300,
  width = 800,
  title
}) => {
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const barWidth = (chartWidth / data.length) * 0.8;
  const barSpacing = (chartWidth / data.length) * 0.2;

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = 0;

  return (
    <div>
      {title && (
        <h3 className="text-sm font-medium text-gray-900 mb-4">{title}</h3>
      )}
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Y-axis grid lines and labels */}
        {[...Array(5)].map((_, i) => {
          const y = padding + (chartHeight * i) / 4;
          const value = maxValue - ((maxValue - minValue) * i) / 4;
          return (
            <g key={i}>
              <line
                x1={padding}
                y1={y}
                x2={width - padding}
                y2={y}
                stroke="#E5E7EB"
                strokeDasharray="4,4"
              />
              <text
                x={padding - 10}
                y={y}
                textAnchor="end"
                alignmentBaseline="middle"
                className="text-xs fill-gray-500"
              >
                {value.toFixed(0)}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((d, i) => {
          const barHeight = (d.value / maxValue) * chartHeight;
          const x = padding + i * (barWidth + barSpacing);
          const y = height - padding - barHeight;

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={d.color || '#818CF8'}
                className="transition-all duration-300 hover:opacity-80"
              >
                <title>{`${d.label}: ${d.value}`}</title>
              </rect>
              <text
                x={x + barWidth / 2}
                y={height - padding + 20}
                textAnchor="middle"
                className="text-xs fill-gray-500"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};