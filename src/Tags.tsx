/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Fragment, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { wrapperStyle, labelStyle, textStyle } from './Input';
import { SelectProps, Option } from './Select';

const Tags: React.FC<Omit<SelectProps, 'value'> & {
  value: Option[];
}> = ({ async, shapeValue, menuListStyle, style, label, error, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(value: string) {
    setInputValue(value);
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event: {
    key: any;
    preventDefault: () => void;
  }) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setInputValue('');
        if (props.onChange) {
          const option = createOption(inputValue);
          props.onChange([...props.value, option], {
            action: 'create-option',
            option,
          });
        }
        event.preventDefault();
    }
  };

  return (
    <label css={wrapperStyle}>
      <p css={labelStyle}>
        {label ? label : <Fragment>&nbsp;</Fragment>}
        {error ? (
          <span
            css={css`
              ${textStyle}
              color: #ff3b57
            `}
          >
            {error}
          </span>
        ) : null}
      </p>

      <CreatableSelect
        {...props}
        components={components}
        styles={{
          control: (base, state) => ({
            ...base,
            borderColor:
              state.menuIsOpen || state.isFocused
                ? 'var(--au-accent-color)'
                : 'transparent',
            '&:hover': {
              borderColor:
                state.menuIsOpen || state.isFocused
                  ? 'var(--au-accent-color)'
                  : 'transparent',
            },
            backgroundColor: '#fff',
            borderRadius: state.menuIsOpen ? '1.4em' : '2em',
            borderWidth: 1,
            borderBottomColor: state.menuIsOpen
              ? '#fff'
              : state.isFocused
              ? 'var(--au-accent-color)'
              : 'transparent',
            borderBottomLeftRadius: state.menuIsOpen ? 0 : '2em',
            borderBottomRightRadius: state.menuIsOpen ? 0 : '2em',
            // marginTop: 2,
            boxShadow:
              state.menuIsOpen || state.isFocused
                ? '0 0 0 4px #f1f1f3;'
                : 'none',
            ...style,
          }),
          container: base => ({
            ...base,
            // marginBottom: 0,
            lineHeight: 1,
          }),
          placeholder: (base, state) => ({
            ...base,
            color: state.isFocused ? '#000' : '#aaa',
            paddingLeft: '0.25em',
            marginTop: 2,
            position: 'relative',
            maxWidth: 'initial',
            transform: 'none',
          }),
          indicatorsContainer: base => ({
            ...base,
            paddingRight: '19px',
          }),

          indicatorSeparator: () => ({ display: 'none' }),
          singleValue: base => ({
            ...base,
            color: '#141520',
            position: 'relative',
            maxWidth: 'initial',
            transform: 'none',
            marginTop: 2,
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            padding: 0,
            width: '1em',
            height: '1em',
            transition: 'transform .3s',
            transform: `rotate(${
              state.selectProps.menuIsOpen ? '180deg' : '0'
            })`,
          }),
          clearIndicator: base => ({
            ...base,
            padding: '0 8px',
          }),
          valueContainer: base => ({
            ...base,
            paddingLeft: '1em',
          }),
          multiValue: (base, state: any) => ({
            ...base,
            backgroundColor: state.menuIsOpen ? '#ececf1' : '#fff',
            padding: '0.3em',
            color: '#141520',
            borderRadius: '2em',
          }),
          multiValueLabel: base => ({
            ...base,
            color: '#141520',
            marginRight: 4,
          }),
          multiValueRemove: base => ({
            ...base,
            color: '#9a9ab0',
            backgroundColor: 'transparent',
            padding: '2px',
            '&:hover': {
              color: '#141520',
              backgroundColor: 'transparent',
            },
          }),
          menu: base => ({
            ...base,
            top: 'calc(100 % - 4px)',
            backgroundColor: '#fff',
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: -1,
            borderRadius: '1.4em',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            zIndex: 2,
            border: '1px solid var(--au-accent-color)',
            boxShadow:
              '0 4px 0 0px #f1f1f3, 4px 0px 0 0px #f1f1f3, -4px 0px 0 0px #f1f1f3',
            borderTop: 0,
            marginBottom: '1.5em',
            textAlign: 'left',
            overflow: 'hidden',
          }),
          menuList: base => ({
            ...base,
            borderTopColor: 'transparent',
            zIndex: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingBottom: '.6em',
            transition: 'none',
            ...menuListStyle,
          }),
          option: (base, state) => ({
            ...base,
            color: '#141520',
            width: 'calc(100% - 36px)',
            margin: '0 auto',
            borderRadius: '2em',
            backgroundColor: state.isFocused ? '#ececf1' : 'transparent',
            lineHeight: 1.3,
            '&:hover': {
              backgroundColor: '#ececf1',
            },
          }),
        }}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        isClearable
        isMulti
        menuIsOpen={false}
      />
    </label>
  );
};

export function Indicator(props: any) {
  return (
    <svg viewBox="0 0 19.03 18.59" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M1.5 8.42l8.05 8.05 7.98-7.98M9.52 1.5v14.97"
      />
    </svg>
  );
}

const components = { DropdownIndicator: null };

export default Tags;

const createOption = (label: string) => ({
  label,
  value: label,
});
