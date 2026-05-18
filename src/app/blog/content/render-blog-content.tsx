import type { ReactNode } from 'react';
import type { BlogArticle } from '../types';
import { BookkeepingAndReportingArticle } from './ai-agents-for-e-commerce-bookkeeping-and-reporting';
import { AiChatbotsVsHumanSupportArticle } from './ai-chatbots-vs-human-support';
import { AiCustomerSuccessArticle } from './ai-customer-success';
import { AiForSalesLeadersArticle } from './ai-for-sales-leaders';
import { AiSalesEnablementArticle } from './ai-sales-enablement';
import { BlogPlaceholderArticle } from './BlogPlaceholderArticle';
import { EcommerceAutomationGuide2026Article } from './ecommerce-automation-guide-2026';
import { DropshippingArticle } from './dropshipping';
import { ECommerceMarketingStrategyArticle } from './e-commerce-marketing-strategy';
import { EcommerceCustomerJourneyArticle } from './ecommerce-customer-journey';
import { EcommerceTrendsArticle } from './ecommerce-trends';
import { HowToMotivateSalesTeamArticle } from './how-to-motivate-sales-team';
import { OnsiteVsRemoteItSupportArticle } from './onsite-vs-remote-it-support';
import { HowToStartAnOnlineBusinessArticle } from './how-to-start-an-online-business';
import { SalesTransformationForPredictableGrowthArticle } from './sales-transformation-for-predictable-growth';
import { WhatIsRoiArticle } from './what-is-roi';

const CONTENT_BY_SLUG: Record<string, () => ReactNode> = {
  'ai-agents-for-e-commerce-bookkeeping-and-reporting': () => (
    <BookkeepingAndReportingArticle />
  ),
  'ai-customer-success': () => <AiCustomerSuccessArticle />,
  'what-is-roi': () => <WhatIsRoiArticle />,
  'E-commerce-Automation-Guide-to-AI-Powered-Operations-2026': () => (
    <EcommerceAutomationGuide2026Article />
  ),
  'how-to-motivate-sales-team': () => <HowToMotivateSalesTeamArticle />,
  'ai-for-sales-leaders': () => <AiForSalesLeadersArticle />,
  'Sales-Transformation-for-Predictable-Growth': () => (
    <SalesTransformationForPredictableGrowthArticle />
  ),
  'ai-sales-enablement': () => <AiSalesEnablementArticle />,
  'how-to-start-an-online-business': () => <HowToStartAnOnlineBusinessArticle />,
  'ecommerce-trends': () => <EcommerceTrendsArticle />,
  Dropshipping: () => <DropshippingArticle />,
  'ai-chatbots-vs-human-support': () => <AiChatbotsVsHumanSupportArticle />,
  'e-commerce-marketing-strategy': () => <ECommerceMarketingStrategyArticle />,
  'Ecommerce-Customer-Journey': () => <EcommerceCustomerJourneyArticle />,
  'onsite-vs-remote-it-support': () => <OnsiteVsRemoteItSupportArticle />,
};

export function renderBlogContent(slug: string, post: BlogArticle): ReactNode {
  const render = CONTENT_BY_SLUG[slug];
  if (render) return render();
  return <BlogPlaceholderArticle post={post} />;
}
