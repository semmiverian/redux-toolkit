export interface IProps {
  user: IUser
}

interface ILogin {
  uuid: string
}

interface IPicture {
  medium: string
}

interface IName {
  first: string
  last: string
}

interface ILocation {
  state: string
  country: string
}

export interface IUser {
  picture: IPicture
  name: IName
  location: ILocation
  login: ILogin
}
