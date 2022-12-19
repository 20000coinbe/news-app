import axios from 'axios';

// https://api.hnpwa.com/v0/news/1.json

const config = {
  BASE_URL: `https://api.hnpwa.com/v0`
}

export function fetchNewsList() {
  return axios.get(`${config.BASE_URL}/news/1.json`)
}

export function fetchJobsList() {
  return axios.get(`${config.BASE_URL}/jobs/1.json`)
}

export function fetchAsksList() {
  return axios.get(`${config.BASE_URL}/ask/1.json`)
}

export function fetchUserInfo(username) {
  return axios.get(`${config.BASE_URL}/user/${username}.json`)
}

export function fetchCommentItem(itemId) {
  return axios.get(`${config.BASE_URL}/item/${itemId}.json`)
}