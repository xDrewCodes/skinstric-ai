import React, { useEffect, useRef } from 'react'
import {
    Chart,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js'

Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

const AnalysisChart = ({ demoPerc }) => {
    const canvasRef = useRef(null)
    const chartInstanceRef = useRef(null)

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d')

        const data = {
            datasets: [
                {
                    data: [demoPerc, 100 - demoPerc],
                    backgroundColor: ['#1a1b1c', '#c1c2c3'],
                    hoverBackgroundColor: ['#1a1b1c', '#c1c2c3'],
                    borderColor: '#00000000'
                },
            ],
            labels: ['White', 'Other'],
        }

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy()
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '97%',
                plugins: {
                    tooltip: {
                        enabled: false
                    },
                    legend: {
                        display: false
                    }
                }
            },
        })

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy()
            }
        }
    }, [])

    return (
        <div className="analysis__chart">
            <canvas
                ref={canvasRef}
                width="400"
                height="400"
            ></canvas>
        </div>
    )
}

export default AnalysisChart 
