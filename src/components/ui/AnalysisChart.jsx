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

        const centerTextPlugin = {
            id: 'centerText',
            beforeDraw: (chart) => {
                const { width, height, ctx } = chart

                ctx.save()

                const mainFontSize = height / 8
                const superscriptFontSize = height / 16

                const numberText = `${Math.round(demoPerc)}`
                const percentText = `%`

                ctx.font = `${mainFontSize}px 'Roobert Trial`
                ctx.textBaseline = 'middle'
                ctx.fillStyle = '#1a1b1c'

                const numberWidth = ctx.measureText(numberText).width

                // Position the number in the center
                const textX = (width - (numberWidth + 10)) / 2  // +10 to account for superscript
                const textY = height / 2

                // Draw the main number
                ctx.fillText(numberText, textX, textY)

                // Set font for the superscript
                ctx.font = `${superscriptFontSize}px 'Roobert Trial`

                // Position the % just to the right and slightly above the number
                const percentX = textX + numberWidth + 2
                const percentY = textY - mainFontSize * 0.4  // adjust this to move it higher

                ctx.fillText(percentText, percentX, percentY)

                ctx.restore()
            },
        }


        let data = {
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
            plugins: [centerTextPlugin],
        })

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy()
            }
        }
    }, [demoPerc])


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
