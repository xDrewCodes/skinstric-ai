import React, { useEffect, useState } from 'react'
import ItemIcon from '../../assets/imports/analysis-item.png'
import ItemIconSelect from '../../assets/imports/analysis-selected-item.png'

const AnalysisBreakdown = ({ setEditing, demo, setDemoPerc, weights, currents, setCurrents }) => {

    function changeSelection(item, val) {
        setEditing(true)

        setCurrents(prevSelected => {
            const updatedSelected = { ...prevSelected }
            updatedSelected[demo] = item
            return updatedSelected
        })

        setDemoPerc(val)
    }

    let curDemo = demo
    if (curDemo === 'sex') { curDemo = 'gender' }

    const sortedItems = weights[curDemo]
        ? Object.entries(weights[curDemo])
            .map(([key, value]) => ({ key, value: (value * 100).toFixed(2) }))
            .sort((a, b) => b.value - a.value)
        : []

    return (
        <div className="analysis__info--breakdown">
            <div className="analysis__info--breakdown--title">
                <h5>{demo}</h5>
                <h5>A.I. Confidence</h5>
            </div>

            {sortedItems &&
                sortedItems.map((item, i) => (
                    item.key !== currents[demo] ? (
                        <div
                            key={i}
                            onClick={() => changeSelection(item.key, item.value)}
                            className="analysis__info--breakdown--item"
                        >
                            <h5>
                                <img src={ItemIcon} alt="" />
                                {item.key}
                            </h5>
                            <h5>{item.value}%</h5>
                        </div>
                    ) : (
                        <div
                            key={i}
                            className="analysis__info--breakdown--item analysis__info--breakdown--item--selected"
                        >
                            <h5>
                                <img src={ItemIconSelect} alt="" />
                                {item.key}
                            </h5>
                            <h5>{item.value}%</h5>
                        </div>
                    )
                ))
            }
        </div>
    )
}

export default AnalysisBreakdown
