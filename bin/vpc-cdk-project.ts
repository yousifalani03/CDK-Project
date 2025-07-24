#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VpcCdkProjectStack } from '../lib/vpc-cdk-project-stack';
import { EC2Stack } from '../lib/ec2-stack';

const app = new cdk.App();
const vpcStack = new VpcCdkProjectStack(app, 'VpcCdkProjectStack', {
  
});

new EC2Stack(app, 'EC2Stack', {
  vpc: vpcStack.vpc
})

app.synth()