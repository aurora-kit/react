import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  Input,
  Radio,
  Loader,
  Button,
  ConfirmButton,
  buttonCx,
  buttonInvertedCx,
  Select,
} from '../.'
import './styles.css'

const App = () => {
  const [value, setValue] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  return (
    <div style={{ width: 400 }}>
      <Input
        placeholder="jlkjkl"
        onChange={e => setValue(e.target.value)}
        value={value}
        hasValue={value.trim() !== ''}
        onClear={() => setValue('')}
        isClearable
      />

      <Radio name="hola" value="1" checked />
      <Radio name="hola" value="2" />
      <Radio name="aa" value="2" isCheckbox />
      <Loader />
      <Button
        onClick={() => setLoading(l => !l)}
        loading={loading}
        inverted
        animated
      >
        Click me
      </Button>

      <ConfirmButton
        onClick={() => setLoading(l => !l)}
        loading={loading}
        inverted
        animated
        confirmMessage="Sure???"
      >
        Confirm me
      </ConfirmButton>

      <br />
      <br />
      <button className={buttonCx}>Raw button</button>
      <button className={`${buttonCx} ${buttonInvertedCx}`}>
        Raw button inverted
      </button>

      <Select
        placeholder="Type"
        options={[
          { value: 'alphabet', label: 'Alphabet' },
          { value: 'vocabulary', label: 'Vocabulary' },
          { value: 'grammar', label: 'Grammar' },
          { value: 'sentences', label: 'Sentences' },
          { value: 'reading', label: 'Reading' },
          { value: 'listening', label: 'Listening' },
        ]}
        isSearchable={false}
        // onChange={(selectedOption, triggeredAction) => {
        //   if (triggeredAction.action === 'clear') {
        //     dispatch({ type: 'type', payload: undefined })
        //   } else {
        //     dispatch({ type: 'type', payload: selectedOption.value })
        //   }
        // }}
        isClearable
        isMulti
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export const TYPE_OPTS = [
  { value: 'alphabet', label: 'Alphabet' },
  { value: 'vocabulary', label: 'Vocabulary' },
  { value: 'grammar', label: 'Grammar' },
  { value: 'sentences', label: 'Sentences' },
  { value: 'reading', label: 'Reading' },
  { value: 'listening', label: 'Listening' },
]
