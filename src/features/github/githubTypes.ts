export type Tree = {
    mode: string
    path: string
    sha: string
    type: string
    url: string
}

export type Content = {
    name: string
    path: string
    sha: string
    size: number
    url: string
    html_url: string
    git_url: string
    download_url: string
    type: string
    _links: {
        self: string
        git: string
        html: string
    }
}
