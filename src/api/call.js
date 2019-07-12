import CryptoJS from 'crypto-js';
import axios from 'axios';

const url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
const method = 'GET';
const app_id = process.env.REACT_APP_YAHOO_APP_ID;
const consumer_key = process.env.REACT_APP_YAHOO_CONSUMER_KEY;
const consumer_secret = process.env.REACT_APP_YAHOO_CONSUMER_SECRET;

const callApi = city => {
  return new Promise(async (resolve, reject) => {
    try {
      const concat = '&';
      const query = {
        location: city,
        format: 'json',
        u: 'c',
        lang: 'pt-BR'
      };
      const oauth = {
        oauth_consumer_key: consumer_key,
        oauth_nonce: Math.random()
          .toString(36)
          .substring(2),
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
        oauth_version: '1.0'
      };

      const merged = {
        ...query,
        ...oauth
      };

      const merged_arr = Object.keys(merged)
        .sort()
        .map(function(k) {
          return [k + '=' + encodeURIComponent(merged[k])];
        });
      const signature_base_str =
        method +
        concat +
        encodeURIComponent(url) +
        concat +
        encodeURIComponent(merged_arr.join(concat));

      const composite_key = encodeURIComponent(consumer_secret) + concat;
      const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
      const signature = hash.toString(CryptoJS.enc.Base64);

      oauth['oauth_signature'] = signature;
      const auth_header =
        'OAuth ' +
        Object.keys(oauth)
          .map(function(k) {
            return [k + '="' + oauth[k] + '"'];
          })
          .join(',');

      const response = await axios.get(url, {
        params: { ...query },
        headers: {
          Authorization: auth_header,
          'X-Yahoo-App-Id': app_id
        }
      });

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};

export default callApi;
