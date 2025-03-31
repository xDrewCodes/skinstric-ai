import React, { useEffect, useState } from 'react'
import ItemIcon from '../../assets/imports/analysis-item.png'
import ItemIconSelect from '../../assets/imports/analysis-selected-item.png'

const AnalysisBreakdown = ({ setEditing, demo, weights, currents }) => {
    // Initialize selected state based on currents
    const [selected, setSelected] = useState({
        race: currents?.race,
        age: currents?.age,
        sex: currents?.sex,
    })

    useEffect(() => {
        // Update selected state if currents change
        if (currents) {
            setSelected({
                race: currents.race,
                age: currents.age,
                sex: currents.sex,
            })
        }
    }, [currents])  // Re-run when currents change

    function changeSelection(item) {
        setEditing(true)
        
        // Update selected state with the new value
        setSelected(prevSelected => {
            const updatedSelected = { ...prevSelected }
            updatedSelected[demo] = item // Update based on the selected demo
            return updatedSelected
        })

        // Store the new selection in localStorage
        localStorage.setItem('race', selected.race)
        localStorage.setItem('age', selected.age)
        localStorage.setItem('sex', selected.sex)
    }

    // Render the breakdown list, ensuring values are sorted by highest percentage
    const sortedItems = weights[demo]
        ? Object.entries(weights[demo])
            .map(([key, value]) => ({ key, value: (value * 100).toFixed(2) })) // Convert to percentage
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
                    item.key !== selected[demo] ? (
                        <div
                            key={i}
                            onClick={() => changeSelection(item.key)}
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
