import React,{Component} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'redux';
import CommentList from '../component/commentList';
import {initComments,delComment} from '../reducers/comments';
