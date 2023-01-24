  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  export type SSRPage<T = {}, IP = any>  = React.FC<T> & {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    getPageProps: <IP>(reqContext: any) => Promise<IP> | undefined;
  }

