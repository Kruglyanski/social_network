import axios from 'axios'

const axiosSamurai = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9bc51b27-d8d1-488e-aa4b-34a0e6e467de'
    }
})

export const authApi = {
    me() {
        return axiosSamurai.get(`auth/me`).then(response => {
            return response.data
        })
    },

    login(email: string, password: string, rememberMe: boolean) {
        return axiosSamurai.post(`auth/login`, {email, password, rememberMe})

    },

    logout() {
        return axiosSamurai.delete(`auth/login`)

    }
}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosSamurai.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    changePage(page: number, pageSize: number) {
        return axiosSamurai.get(`users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteFollow(id: number) {
        return axiosSamurai.delete(`follow/${id}`)
            .then(response => {
                return response.data.resultCode
            })
    },
    postFollow(id: number) {
        return axiosSamurai.post(`follow/${id}`)
            .then(response => {
                return response.data.resultCode
            })
    },
    setUser(userId: string) {
        console.warn('Ol API')
        return profileApi.getProfile(userId)

    }
}

export const profileApi = {
    getProfile(userId: string) {
        return axiosSamurai.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getProfileStatus(userId: string) {
        return axiosSamurai.get(`profile/status/${userId}`)
    },

    updateProfileStatus(status: string) {
        return axiosSamurai.put(`profile/status`, {status: status})
    }
}
