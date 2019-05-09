const styles = {
  button: {
    normal: {
      backgroundColor: 'unset',
      border: 'none',
      height: 24,
      padding: 0,
      verticalAlign: 'top',
      width: 24,
    },

    hovered: {
      backgroundColor: '#eaeaea',
    },

    active: {
      backgroundColor: '#e0e0e0',
    },
  },

  contentEditable: {
    flex: 1,
    outline: 'none',
    padding: 5,
  },

  dropdown: {
    height: 20,
    marginTop: 2,
    outline: 'none',
    width: '5em',
  },

  editor: {
    border: '1px solid #ddd',
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column' as any,
    minHeight: 100,
  },

  separator: {
    backgroundColor: '#ddd',
    display: 'inline-block',
    height: 20,
    margin: 2,
    verticalAlign: 'top',
    width: 1,
  },
};

export default styles;
export type IStyles = typeof styles;
