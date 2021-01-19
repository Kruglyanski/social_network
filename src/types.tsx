export type MessageType = {
    id: number,
    message: string,
    author: string
}

export type DialogType = {
    id: number,
    name: string,
    avatar: string
}

export type FriendType = {
    id: number,
    name: string,
    avatar: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type UserType = {
    id: number,
    name: string,
    status: string | null,
    uniqueUrlName: string | null,
    followed: boolean,
    photos: {
        small: string | null,
        large: string | null
    }
}
export type UserIdType = number
export type NewPostTextType = string
export type NewMessageBodyType = string


export type ProfilePageActionType = {
    type: string,
    payload: NewPostTextType
}




export type DispatchType = (action: any) => any

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: NewPostTextType
    profile: UserProfileType | null
}

export type UserProfileType ={
    aboutMe: null | string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    lookingForAJob: true,
    lookingForAJobDescription: null | string,
    fullName: null | string,
    userId: number,
    photos: {
        small: null | string,
        large: null | string
    }
}


export type UserPageType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    pagesCount: number
    isFetching: boolean

}

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageBody: NewMessageBodyType
}
export type SidebarType = {
    friends: Array<FriendType>
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType,
    usersPage: UserPageType
}
