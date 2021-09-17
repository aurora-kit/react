import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Input, Radio, Loader, Button } from '../.'
import './styles.css'

const App = () => {
  const [value, setValue] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  return (
    <div style={{ width: 400 }}>
      <Input
        label="hola"
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
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
