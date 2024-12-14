import React from 'react';

interface DataPoint {
  date: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  height?: number;
  width?: number;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 300,
  width = 800
}) => {
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Find min and max values
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));

  // Create points for the line
  const points = data.map((d, i) => {
    const x = (i * chartWidth) / (data.length - 1) + padding;
    const y = chartHeight - ((d.value - minValue) / (maxValue - minValue)) * chartHeight + padding;
    return `${x},${y}`;
  }).join(' ');

  // Create gradient
  const gradientId = `line-gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Y-axis grid lines */}
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

      {/* X-axis labels */}
      {data.map((d, i) => {
        const x = (i * chartWidth) / (data.length - 1) + padding;
        return (
          <text
            key={i}
            x={x}
            y={height - padding + 20}
            textAnchor="middle"
            className="text-xs fill-gray-500"
          >
            {d.date}
          </text>
        );
      })}

      {/* Area under the line */}
      <path
        d={`M ${padding},${chartHeight + padding} ${points} L ${width - padding},${
          chartHeight + padding
        }`}
        fill={`url(#${gradientId})`}
      />

      {/* Line */}
      <path
        d={`M ${points}`}
        fill="none"
        stroke="#818CF8"
        strokeWidth="2"
      />

      {/* Data points */}
      {data.map((d, i) => {
        const x = (i * chartWidth) / (data.length - 1) + padding;
        const y = chartHeight - ((d.value - minValue) / (maxValue - minValue)) * chartHeight + padding;
        return (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="4"
              fill="white"
              stroke="#818CF8"
              strokeWidth="2"
              className="transition-transform hover:scale-150"
            />
            <circle
              cx={x}
              cy={y}
              r="12"
              fill="transparent"
              className="cursor-pointer"
              onMouseOver={(e) => {
                const tooltip = document.createElement('div');
                tooltip.className = 'bg-gray-900 text-white px-2 py-1 rounded text-sm';
                tooltip.style.position = 'absolute';
                tooltip.style.left = `${e.clientX}px`;
                tooltip.style.top = `${e.clientY - 30}px`;
                tooltip.textContent = `${d.value}`;
                document.body.appendChild(tooltip);
              }}
              onMouseOut={() => {
                const tooltips = document.querySelectorAll('.tooltip');
                tooltips.forEach(t => t.remove());
              }}
            />
          </g>
        );
      })}
    </svg>
  );
};