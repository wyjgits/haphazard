
/**
 * 读英文
 * @param {string} sentence 需要播放的句子
 */
export function readEnglish(sentence) {
	return readSentenceByYoudao(sentence, 'en');
}

/**
 * 读中文
 * @param {string} sentence 需要播放的句子
 */
export function readZh(sentence) {
	return readSentenceByYoudao(sentence, 'zh');
}

/**
 * 基于有道API读句子
 * @param {string} sentence需要读的句子
 * @param {'en' | 'zh'} le 语言，en英文 zh中文
 */
export function readSentenceByYoudao(sentence, le){
	const promise = new Promise((res,rej) => {
		const innerAudioContext = uni.createInnerAudioContext();
		innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${sentence}&le=${le}`;
		innerAudioContext.autoplay = true;
		innerAudioContext.play();
		innerAudioContext.onEnded(()=>{
			res();
		})
		innerAudioContext.onError(()=>{
			rej();
		})
	})
	return promise;
	
}