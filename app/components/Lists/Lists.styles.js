import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  icon: {
    backgroundColor: 'transparent',
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    width: 18,
  },
  iconVisible: {
    backgroundColor: '$primaryBlue',
  },
  underlayColor: {
    backgroundColor: '$border',
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: {
    fontSize: 16,
    color: '$darkText',
  },
  separator: {
    marginLeft: 20,
    backgroundColor: '$border',
    flex: 1,
    height: 0.32,
  },
});

export default styles;
