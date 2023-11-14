<template>
	<view class="content">
		<view v-for="(sentence, index) of sentences">
			<text>{{sentence.en}}</text>
			<br />
			<text>{{sentence.zh}}</text>
			<button size="mini" @click="readEn(index)">朗读英文</button>
			<button size="mini" @click="readEnFrom(index)">从此向后(en)</button>
			<button size="mini" @click="readFrom(index)">从此向后(all)</button>
			<button size="mini" @click="readFrom(index,2)">从此向后(twice)</button>
		</view>
	</view>
</template>

<script>
	import sentences from './sentences.js';
	import { readEnglish, readZh } from '../../utils/audioUtils.js';
	export default {
		data() {
			return {
				sentences
			}
		},
		onLoad() {

		},
		methods: {
			readEn(index) {
				readEnglish(this.sentences[index].en);
			},
			async readEnFrom(index) {
				for(let i = index; i < this.sentences.length; i++){
					await readEnglish(this.sentences[i].en);
				}
			},
			async readFrom(index, time = 1) {
				for(let i = index; i < this.sentences.length; i++){
					for(let j = 0; j< time; j++){
						await readZh(this.sentences[i].zh);
						await readEnglish(this.sentences[i].en);
					}
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx;
		gap: 20rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
