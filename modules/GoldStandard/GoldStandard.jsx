import React from 'react'
import { connect } from 'react-redux'
import { WORD_RELATION_TYPES } from 'modules/Game/constants'
import Center from 'modules/shared/Center'
import { resampleGoldStandard } from './reducer'

const GoldStandardComponent = ({ sampleGoldStandards, isLoading, resample }) => !isLoading ? (
    <div className="d-flex flex-column">
        <div>{
            sampleGoldStandards.map(
                ({ lhsWord, rhsWord, wordRelationType }, i) =>
                    <Center className="d-flex flex-column m-2" key={i}>
                        <p className="m-1 text-center">
                            {lhsWord} <span className="h4 ml-1 mr-1">{Object.values(WORD_RELATION_TYPES).filter(wrt => wrt.id === wordRelationType.id)[0].symbol}</span> {rhsWord}
                        </p>
                        
                        {wordRelationType.id === WORD_RELATION_TYPES.HYPONYMY.id && (
                            <p className="text-center">{lhsWord} adalah sejenis {rhsWord}</p>
                        )}
        
                        {wordRelationType.id === WORD_RELATION_TYPES.SYNONYMY.id && (
                            <p className="text-center">{lhsWord} sama artinya dengan {rhsWord}</p>
                        )}
                        
                        {wordRelationType.id === WORD_RELATION_TYPES.UNRELATED.id && (
                            <p className="text-center">{lhsWord} bukan sejenis {rhsWord} dan  {lhsWord} tidak sama artinya dengan {rhsWord}</p>
                        )}
                    </Center>
            )
        }</div>
        <button className="btn btn-sm btn-outline-success m-2" onClick={resample}>Contoh lain</button>
    </div>
) : <span>loading...</span>

const mapStateToProps = (state) => ({
    isLoading: state.goldStandardState.isLoading,
    sampleGoldStandards: state.goldStandardState.sampleGoldStandards,
})

const mapDispatchToProps = (dispatch) => ({
    resample: () => dispatch(resampleGoldStandard())
})

const GoldStandard = connect(mapStateToProps, mapDispatchToProps)(GoldStandardComponent)

export default GoldStandard
