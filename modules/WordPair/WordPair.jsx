import React from 'react'
import { connect } from 'react-redux'
import WordPairExample from './components/WordPairExample'
import Center from 'modules/shared/Center'

const desc = '%a adalah sejenis %b'

export const WordPairComponent = ({
    word1,
    word2,
    example,
    isLoading
}) => isLoading ? (<Center>loading..</Center>) : (
        <div className="d-flex flex-column">
            <Center className="mb-3">
                <h4>{word1} &#8594; {word2}</h4>
            </Center>
            <WordPairExample sentence={example}/>
        </div>
    )

const mapStateToProps = (state) => ({
    ...state.wordPairState
})

const WordPair = connect(mapStateToProps)(WordPairComponent)

export default WordPair
