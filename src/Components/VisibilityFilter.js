import { connect } from 'react-redux'
import { VISIBILITY_FILTERS } from '../constants'
import { setFilter } from '../redux/actions/visibilityFilter'

const VisibilityFilter = ({ activeFilter, setFilter }) => {
    return (
        <div>
            {Object.keys(VISIBILITY_FILTERS).map((optionFilter, index) => {
                const currentFilter = VISIBILITY_FILTERS[optionFilter]
                return <span
                    className={`filter ${activeFilter === currentFilter ? 'filter--active' : ''}`}
                    key={index}
                    onClick={() => setFilter(currentFilter)}
                >
                    {currentFilter}
                </span>
            })}
        </div>
    )
}

const mapStateToProps = props => {
    return {
        activeFilter: props.visibilityFilterReducer
    }
}

const MapDispatchToProps = {
    setFilter
}

export default connect(mapStateToProps, MapDispatchToProps)(VisibilityFilter)