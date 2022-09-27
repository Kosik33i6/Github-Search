import { useRouteError } from 'react-router-dom';
import styles from './style.module.scss';

const { wrapper, wrapperMessage, heading, info, statusCode } = styles;

export const ErrorPage = () => {
  const error = useRouteError();
  // @ts-ignore
  const { status, statusText } = error;

  return (
    <div id="error-page" className={wrapper}>
      <div className={wrapperMessage}>
        <h1 className={heading}>Sorry, an unexpected error has occurred.</h1>
        <p className={statusCode}>{status}</p>
        <p className={info}>{statusText}</p>
      </div>
    </div>
  );
};
