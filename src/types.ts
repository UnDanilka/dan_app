export interface IthemeState {
  theme: string;
}

export interface Icontact {
  link: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
}

export interface Itodo {
  title: string;
  id: number;
}

export interface Istore {
  theme: IthemeState;
  todosApi: any;
}

export interface ISwitchProps {
  onChange: (e: boolean) => void;
}
