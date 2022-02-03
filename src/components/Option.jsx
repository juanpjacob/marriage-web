import { joinStyles } from '../lib/styles';

import styles from '../styles/option.module.css';

function Option(props) {
  const { value, isSelected, onSelect, className } = props;
  const optionClassName = joinStyles({
    [styles.option]: true,
    [className]: className,
  });
  const markClassName = joinStyles({
    [styles.mark]: true,
    [styles.on]: isSelected,
  });

  return (
    <div
      role="button"
      className={optionClassName}
      onClick={() => onSelect(value)}
    >
      <div className={markClassName}></div>
      <p>{props.children}</p>
    </div>
  );
}

export default Option;
