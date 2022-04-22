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
  Wrapper,
  Textarea,
} from '../.'
import './styles.css'

const App = () => {
  const [value, setValue] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        placeholder="jlkjkl"
        onChange={e => setValue(e.target.value)}
        value={value}
        hasValue={value.trim() !== ''}
        onClear={() => setValue('')}
        isClearable
      />
      <Wrapper label={<>&nbsp;</>}>
        <Button
          onClick={() => setLoading(l => !l)}
          loading={loading}
          inverted
          animated
        >
          Click me
        </Button>
      </Wrapper>

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
        value="reading"
        shapeValue
        isSearchable={false}
        isClearable
        isMulti
        style={{ minHeight: 48, minWidth: 200 }}
      />
      <Select
        placeholder="Type"
        options={[
          {
            label: 'Group 1',
            options: [
              { label: 'Group 1, option 1', value: 'value_1' },
              { label: 'Group 1, option 2', value: 'value_2' },
            ],
          },
          { label: 'A root option', value: 'value_3' },
          { label: 'Another root option', value: 'value_4' },
        ]}
        isSearchable={false}
        isClearable
        value="value_1"
        shapeValue
        style={{ minHeight: 48, minWidth: 200 }}
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

      <Textarea>jkljl</Textarea>
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
